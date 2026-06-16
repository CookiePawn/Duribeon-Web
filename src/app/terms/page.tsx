import { termsLead, termsSections } from "../legal-content";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fbf7ef] px-5 py-8 text-[#242622] sm:px-8 lg:px-10">
      <article className="mx-auto max-w-3xl rounded-lg border border-[#eadfc9] bg-[#fffdf8] p-6 sm:p-10">
        <a className="text-sm font-black text-[#385f3d]" href="/">
          두리번 홈
        </a>
        <h1 className="mt-8 text-4xl font-black">이용 약관</h1>
        <p className="mt-6 text-lg font-extrabold leading-8">{termsLead}</p>
        <div className="mt-10 space-y-8">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-base font-black text-[#385f3d]">
                {section.title}
              </h2>
              <p className="mt-3 text-base font-semibold leading-8 text-[#4f514b]">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
