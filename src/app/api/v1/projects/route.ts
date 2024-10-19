import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized " }, { status: 401 });
  }

  const { name } = await request.json;

  try {
    await prismaClient.project.create({
      data: { name: name, userId: session.user.id },
    });

    return NextResponse.json(
      { message: "Projeto criado com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error while register new customer" },
      { status: 501 }
    );
  }
}
