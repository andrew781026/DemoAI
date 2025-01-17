import feature from '@/assets/feature.png';
import heroSection from '@/assets/hero-section.png';
import hasGFarm from '@/assets/has-g-farm.png';

// @ts-nocheck
export default function Home() {

  const info = [
    {
      title: 'Hero-section-marquee',
      codePenId: 'NPKMwmY',
      image: heroSection,
    },
    {
      title: 'horizontal-parallax',
      codePenId: 'qEWYVeO',
      image: hasGFarm,
    },
    {
      title: 'Feature C',
      codePenId: 'RNbJwVN',
      image: feature,
    },
    {
      title: 'Feature D - scroll',
      codePenId: 'dPbeZrG',
      image: feature,
    },
  ];

  return (
    <div className="max-h-screen flex flex-col">
      <main
        className="snap-mandatory snap-y overflow-y-auto flex-1 w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">

        {
          info.map((item, index) => (
            <>
              <div key={`img-${index}`} className="snap-start w-full flex min-h-screen max-h-screen justify-center items-center">
                <img className="m-auto" style={{maxHeight:'80vh'}} src={item.image.src} />
              </div>
              <div key={`codepen-${index}`} className="w-[85vw] gap-2 snap-start min-h-screen flex flex-col justify-center mx-auto">
                <h4 className="text-3xl font-bold">{item.title}</h4>
                <iframe height="500"
                        style={{ width: '100%' }}
                        scrolling="no"
                        title={item.title}
                        src={`https://codepen.io/andrew781026/embed/${item.codePenId}?default-tab=result&editable=true`}
                        frameBorder="no"
                        loading="lazy">
                  See the Pen <a href={`https://codepen.io/andrew781026/pen/${item.codePenId}`}>
                  {item.title}</a> by 王澍 (<a href="https://codepen.io/andrew781026">@andrew781026</a>)
                  on <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
            </>
          ))
        }


      </main>
    </div>
  );
}
