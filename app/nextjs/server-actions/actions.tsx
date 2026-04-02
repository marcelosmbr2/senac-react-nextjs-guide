"use server";

export async function salvarTarefa(formData: FormData) {
  const titulo = formData.get("titulo") as string;

  if (!titulo?.trim()) {
    return { ok: false, mensagem: "O título não pode estar vazio." };
  }

  // Aqui ficaria a chamada para uma API externa, ex:
  // await fetch("https://api.exemplo.com/tarefas", {
  //   method: "POST",
  //   headers: { Authorization: `Bearer ${process.env.API_SECRET}` },
  //   body: JSON.stringify({ titulo }),
  // });

  return { ok: true, mensagem: `Tarefa "${titulo}" salva com sucesso!` };
}
