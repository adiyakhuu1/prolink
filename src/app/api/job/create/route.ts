import { prisma } from "@/lib/prisma";
import { CustomNextResponse, NextResponse_CatchError } from "@/lib/responses";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    title,
    description,
    experienced,
    salary,
    salaryRate,
    posterId,
    skill,
    status,
  } = await req.json();

  try {
    const newJob = await prisma.job.create({
      data: {
        title,
        description,
        experienced,
        salary,
        salaryRate,
        posterId,
        skill: { connect: skill },
        ...(status ? { status } : {}),
      },
    });
    if (!newJob) {
      return CustomNextResponse(
        false,
        "ERROR",
        "Шинэ зар нэмж чадсангүй!",
        null
      );
    }
    return CustomNextResponse(true, "SUCCESS", "Шинэ зар амжилттай нэмлээ!", {
      newJob,
    });
  } catch (err) {
    console.error(err, "Сервер дээр асуудал гарлаа");
    return NextResponse_CatchError(err);
  }
}
