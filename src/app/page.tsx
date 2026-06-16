const screenshots = [
  {
    src: "/images/duribeon/today.jpeg",
    title: "오늘의 일탈",
    description: "오늘 하나의 작은 제안을 받고 바로 실행해요.",
    crop: "object-[center_12%]",
  },
  {
    src: "/images/duribeon/records.jpeg",
    title: "기록",
    description: "완료한 순간을 날짜별로 쌓아 다시 볼 수 있어요.",
    crop: "object-[center_18%]",
  },
  {
    src: "/images/duribeon/discover.jpeg",
    title: "발견",
    description: "이동, 감각, 관계, 생각 같은 카테고리에서 고를 수 있어요.",
    crop: "object-[center_18%]",
  },
  {
    src: "/images/duribeon/journey.jpeg",
    title: "나의 여정",
    description: "레벨과 배지로 작은 시선의 변화를 확인해요.",
    crop: "object-[center_14%]",
  },
];

const features = [
  {
    eyebrow: "1-5분",
    title: "부담 없이 끝나는 제안",
    body: "돈이 거의 들지 않고 준비물도 필요하지 않은 작은 행동으로 하루의 방향을 살짝 바꿉니다.",
  },
  {
    eyebrow: "기록",
    title: "한 줄로 남기는 오늘",
    body: "완료한 제안과 메모를 기기 안에 저장하고, 달력과 목록으로 차분히 돌아볼 수 있습니다.",
  },
  {
    eyebrow: "여정",
    title: "성취보다 발견에 가까운 성장",
    body: "레벨과 배지는 사용자가 주변을 조금 다르게 본 순간들을 가볍게 표시합니다.",
  },
];

const missions = [
  "바닥이나 벽에 있는 방향 표시 하나를 찾아보세요.",
  "오늘 처음 본 단어 하나를 골라 뜻을 확인해보세요.",
  "마지막 한입을 먹기 전 5초만 멈췄다가 먹어보세요.",
  "직접 말하기 어렵다면 누군가의 좋은 점을 한 줄로 기록해보세요.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ef] text-[#242622]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a className="text-xl font-black text-[#385f3d]" href="#">
          두리번
        </a>
        <nav className="hidden items-center gap-7 text-sm font-bold text-[#64665f] sm:flex">
          <a href="#features">기능</a>
          <a href="#screens">화면</a>
          <a href="#policy">정책</a>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-6 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:px-10 lg:pb-28 lg:pt-12">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-[#e8dcc1] bg-white/55 px-4 py-2 text-sm font-extrabold text-[#385f3d]">
            하루를 조금 다르게 만드는 1-5분짜리 제안 앱
          </p>
          <h1 className="text-5xl font-black leading-[1.08] text-[#242622] sm:text-6xl lg:text-7xl">
            익숙한 하루를
            <br />
            조금만 두리번.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-[#55574f] sm:text-xl sm:leading-9">
            두리번은 습관을 만들거나 생산성을 높이는 앱이 아닙니다.
            오늘 주변에서 작은 우연과 발견을 경험하도록 돕는 개인용
            기록 앱입니다.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-[#385f3d] px-6 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(56,95,61,0.22)]"
              href="#screens"
            >
              앱 화면 보기
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-[#ded2bb] bg-white/60 px-6 py-4 text-base font-black text-[#385f3d]"
              href="#policy"
            >
              정책 확인하기
            </a>
          </div>
        </div>

        <div className="relative min-h-[560px] lg:min-h-[650px]">
          <div className="absolute inset-x-0 top-0 mx-auto h-[620px] max-w-[520px] rounded-[36px] border border-[#eadfc9] bg-[#fffdf8] shadow-[0_28px_80px_rgba(65,57,42,0.14)]" />
          <img
            alt="돋보기를 들고 주변을 살피는 두리번 캐릭터"
            className="absolute inset-x-0 top-0 mx-auto h-[620px] max-w-[520px] rounded-[36px] object-cover"
            src="/images/duribeon/mascot.png"
          />
          <div className="absolute bottom-2 left-1/2 w-[min(88vw,430px)] -translate-x-1/2 rounded-2xl border border-[#eadfc9] bg-white/90 p-6 shadow-[0_18px_50px_rgba(65,57,42,0.16)] backdrop-blur">
            <p className="text-sm font-black text-[#385f3d]">오늘의 제안</p>
            <p className="mt-3 text-2xl font-black leading-snug">
              바닥이나 벽에 있는 방향 표시 하나를 찾아보세요.
            </p>
            <p className="mt-4 text-sm font-bold text-[#6a6b63]">
              예상 시간 2분
            </p>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-y border-[#e9ddc8] bg-[#fffdf8] px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black text-[#385f3d]">서비스 철학</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              성취를 재촉하지 않고, 하루의 시선을 넓혀요.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                className="rounded-lg border border-[#eadfc9] bg-[#fbf7ef] p-7"
                key={feature.title}
              >
                <p className="text-sm font-black text-[#385f3d]">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-black">{feature.title}</h3>
                <p className="mt-4 text-base font-semibold leading-7 text-[#60625b]">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-black text-[#385f3d]">미션 콘텐츠</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              아주 작은 행동으로 충분합니다.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#60625b]">
              이동, 관찰, 감각, 음식, 관계, 생각처럼 일상에서 바로 고를
              수 있는 제안들이 준비되어 있습니다.
            </p>
          </div>
          <div className="grid gap-3">
            {missions.map((mission, index) => (
              <div
                className="flex items-center gap-5 rounded-lg border border-[#eadfc9] bg-white/60 p-5"
                key={mission}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efe3c7] text-sm font-black text-[#385f3d]">
                  {index + 1}
                </span>
                <p className="text-lg font-extrabold leading-7">{mission}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="screens"
        className="bg-[#f4eddf] px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black text-[#385f3d]">앱 화면</p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                제안하고, 기록하고, 다시 발견합니다.
              </h2>
            </div>
            <p className="max-w-sm text-base font-semibold leading-7 text-[#60625b]">
              제공된 화면 이미지를 사용하되 광고 영역은 랜딩에서 노출하지
              않았습니다.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((screen) => (
              <article key={screen.title}>
                <div className="aspect-[9/14] overflow-hidden rounded-[28px] border border-[#e1d4bd] bg-[#fffdf8] shadow-[0_18px_48px_rgba(65,57,42,0.14)]">
                  <img
                    alt={`두리번 ${screen.title} 화면`}
                    className={`h-full w-full object-cover ${screen.crop}`}
                    src={screen.src}
                  />
                </div>
                <h3 className="mt-5 text-xl font-black">{screen.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#62645d]">
                  {screen.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="policy"
        className="border-t border-[#e9ddc8] bg-[#fffdf8] px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black text-[#385f3d]">데이터와 정책</p>
            <h2 className="mt-3 text-3xl font-black">기록은 기본적으로 기기 안에 저장됩니다.</h2>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#60625b]">
              두리번은 회원가입, 로그인, 서버 저장 기능 없이 로컬 JSON
              데이터로 기록과 여정을 다룹니다.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-lg border border-[#ded2bb] px-5 py-3 text-sm font-black text-[#385f3d]"
              href="/privacy"
            >
              개인정보 처리방침
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-[#ded2bb] px-5 py-3 text-sm font-black text-[#385f3d]"
              href="/terms"
            >
              이용 약관
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
