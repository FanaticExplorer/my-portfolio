export function Contact() {
  return (
    <section className="min-h-screen bg-[#0e0e0e] px-6 py-16 text-[#f0f0f0]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div>
          <h1
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Контакты
          </h1>
          <p className="mt-3 text-[#888888]">
            Напишите о задаче, сроках и бюджете. Обычно отвечаю в течение 24-48 часов.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-6">
            <form
              action="https://formspree.io/f/xeenjoyz"
              method="POST"
              className="grid gap-4"
            >
              <input
                name="name"
                placeholder="Имя"
                className="rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 text-sm text-[#f0f0f0]"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 text-sm text-[#f0f0f0]"
                required
              />
              <textarea
                name="details"
                rows={5}
                placeholder="Кратко опишите задачу, сроки и бюджет"
                className="rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 text-sm text-[#f0f0f0]"
                required
              />
              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#e8b84b] px-6 py-3 text-sm font-semibold text-[#0e0e0e] transition hover:brightness-110"
              >
                Отправить запрос
              </button>
            </form>
          </div>
          <div className="rounded-xl border border-[#2a2a2a] bg-[#161616] p-5">
            <h2 className="text-lg font-semibold">Контакты</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/FanaticExplorer"
                target="_blank"
                rel="noreferrer"
                className="text-[#e8b84b]"
              >
                GitHub
              </a>
              <a
                href="https://t.me/FanaticExplorer"
                target="_blank"
                rel="noreferrer"
                className="text-[#e8b84b]"
              >
                Telegram
              </a>
              <a
                href="https://freelancehunt.com/freelancer/FanaticExplorer.html"
                target="_blank"
                rel="noreferrer"
                className="text-[#e8b84b]"
              >
                FreelanceHunt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
