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
    let existingProfile = await prismaClient.profile.findUnique({
      where: { userId: session.user.id },
    });

    if (!existingProfile) {
      existingProfile = await prismaClient.profile.create({
        data: {
          userId: session.user.id,
          description,
        },
      });

      return NextResponse.json(
        { message: "Perfil criado com sucesso!", profile: existingProfile },
        { status: 201 }
      );
    }

    await prismaClient.profile.update({
      where: { userId: session.user.id },
      data: { description },
    });

    return NextResponse.json(
      { message: "Descrição atualizada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao atualizar o perfil:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar o perfil." },
      { status: 500 }
    );
  }
}
