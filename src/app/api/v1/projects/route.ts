import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized " }, { status: 401 });
  }

  const { id, userId } = await request.json();
  if (userId !== session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized " }, { status: 401 });
  }

  try {
    await prismaClient.project.delete({ where: { id } });

    return NextResponse.json(
      { deleted: "Projeto deletado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while delte project: ", error);
    return NextResponse.json(
      { error: "Error while delete project" },
      { status: 501 }
    );
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized " }, { status: 401 });
  }

  const { name, category } = await request.json();
  if (!name || !category) {
    return NextResponse.json(
      { error: "Categoria e nome são obrigatórios!" },
      { status: 400 }
    );
  }

  try {
    await prismaClient.project.create({
      data: { name: name, userId: session.user.id, categoryId: category },
    });

    return NextResponse.json(
      { message: "Projeto criado com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while creating project:", error);
    return NextResponse.json(
      { error: "Error while register new project" },
      { status: 501 }
    );
  }
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized " }, { status: 401 });
  }

  const { id, timer } = await request.json();
  if (!timer || !id) {
    return NextResponse.json(
      { error: "É obrigatório fornecer o tempo atualizado!" },
      { status: 400 }
    );
  }

  try {
    await prismaClient.project.update({
      where: { id },
      data: { timer },
    });

    return NextResponse.json(
      { message: "Projeto atualizado com sucesso!" },
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get("projectId");

  if (!projectId) {
    return NextResponse.json(
      { error: "É obrigatório fornecer o id do projeto!" },
      { status: 400 }
    );
  }

  try {
    const project = await prismaClient.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Projeto não encontrado!" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Erro ao buscar projeto:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
