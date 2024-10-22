import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session?.user) {
    return NextResponse.json({ error: "Unauthorized " }, { status: 401 });
  }

  const { description } = await request.json();
  if (!description) {
    return NextResponse.json(
      { error: "É obrigatório fornecer a descrição!" },
      { status: 400 }
    );
  }

  try {
    await prismaClient.profile.update({
      where: { userId: session?.user?.id },
      data: { description },
    });

    return NextResponse.json(
      { message: "Descrição atualizada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while patch project timer:", error);
    return NextResponse.json(
      { error: "Error while register new project" },
      { status: 501 }
    );
  }
}
