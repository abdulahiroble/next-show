import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { Button } from "../stories/Button";
import { JustWatchLogo } from "../stories/JustWatchLogo";
import Image from "next/image";
import { NextSeo } from "next-seo";
import useSWR from "swr";

const SerieInfo = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };

  const router = useRouter();

  // console.log(providers);

  // console.log(router);
  return (
    <>
      <NextSeo
        title="Serie information | Få detaljer om en bestemt serie"
        description="Få et indblik i en bestemt serie. Få information ved at læse et kort resume omkring showet. Dertil kan du se hvor mange sæsoner en bestemt serien har. Har du brug for noget visuelt har du også mulighed for at se trailers serien. Til sidst har du også mulighed for at se hvor serien kan streames henne."
        noindex={true}
      />
      {Posts(props)}
      <Layout>
        <div className="flex flex-col w-9/12 mx-auto">
          <div className="mb-5">
            <Image
              alt="banner"
              width={400}
              height={600}
              src={`${router.query.thumbnail}`}
            />
          </div>

          <div>
            <div className="text-2xl font-bold">
              <div className="mb-3">Titel: {router.query.original_name}</div>
              <div className="mb-3">Bedømmelse: {router.query.rating}</div>
              {/* <div>
              Genre:{" "}
              {router.query.genre ? (
                router.query.genre
              ) : (
                <p>intet genre oplyst</p>
              )}
            </div> */}
            </div>
          </div>
        </div>

        <div className="w-9/12 mx-auto my-5">
          <div className="text-3xl font-bold mb-2 ">Resume</div>
          <div className="text-base sm:text-lg">
            {router.query.summary ? (
              router.query.summary
            ) : (
              <p>intet resume endnu</p>
            )}
          </div>
        </div>

        <div className="w-9/12 mx-auto">
          <div className="text-3xl font-bold">Sæsoner</div>
          <Slider {...settings}>
            {props.details.seasons.map((details: { poster_path: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; air_date: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal; }) => {
              return (
                <div className="text-center">
                  <Image
                    width={400}
                    height={600}
                    src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                    alt="sæsoner"
                    className="w-9/12 mx-auto sm:max-w-sm mt-3"
                  />
                  <div className="text-center mt-3">
                    <div className="text-2xl font-bold">
                      <b>{details.name}</b>
                    </div>
                    <div className="text-base mb-5">
                      Først udsendt: {details.air_date}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="w-9/12 mx-auto">
          <div className="text-3xl">
            <div className="mb-3 mt-3 font-bold">Trailers</div>
            {props.trailer.results.map((youtube: { key: any; }) => {
              return (
                <div>
                  {props.trailer.results ? (
                    <iframe
                      height="300"
                      width="300"
                      className="lg:h-96 lg:max-w-screen-lg mx-auto h-44 sm:w-full md:max-w-xl sm:h-64"
                      src={`https://www.youtube.com/embed/${youtube.key}`}
                    ></iframe>
                  ) : (
                    <p>Ingen trailer tilgængelig</p>
                  )}
                  <br />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto w-64 lg:w-72 text-center">
          {props.providers.results.DK.flatrate.map((provider: { provider_name: string; }) => {
            if (provider.provider_name == "C More") {
              return (
                <div>
                  <Button variant="red">
                    <a
                      href="https://track.adtraction.com/t/t?a=1275838043&as=1580579680&t=2&tk=1"
                      target="_blank"
                      className="hover:no-underline text-white hover:text-white text-lg font-medium w-64"
                    >
                      SE SERIE PÅ C MORE <br /> Prøv 2 uger gratis
                    </a>
                  </Button>
                  <span className="italic my-3">*Annoncelink</span> <br />
                  <br />
                  <span className="text-sm text-white w-64 italic mb-10 lg:text-lg">
                    Prøv C More gratis og få fri adgang til streaming af nye
                    film og serier for hele familien. Hver eneste uge kommer der
                    helt nye film og serieafsnit til. Vælg mellem alt fra
                    krimier i verdensklasse, actionbrag, komedie, romantik og
                    alle børnenes favoritter.
                  </span>
                  <JustWatchLogo />
                </div>
              );
            } else if (provider.provider_name == "Viaplay") {
              return (
                <div>
                  <Button variant="red">
                    <a
                      href="https://track.adtraction.com/t/t?a=1531118376&as=1580579680&t=2&tk=1"
                      target="_blank"
                      className="hover:no-underline text-white hover:text-white text-lg font-medium w-64"
                    >
                      SE SERIE PÅ VIAPLAY <br /> Prøv 2 uger gratis
                    </a>
                  </Button>
                  <span className="italic my-3">*Annoncelink</span> <br />
                  <span className="text-sm text-white w-64 italic mb-10 lg:text-lg">
                    <br /> Løft fredagsstemningen, togrejsen og sofa hyggen:
                    prøv Viaplay-film og -serier gratis i to uger! Se online. På
                    mobil, computer, tablet eller Smart-Tv. Hvordan du vil og
                    når det passer dig. I hele EU. Afslut når du vil. Hos os får
                    du fuld fleksibilitet. Du kan opsige Viaplay når som helst.
                  </span>
                  <JustWatchLogo />
                </div>
              );
            } else if (provider.provider_name == "Amazon Prime Video") {
              return (
                <div>
                  <Button variant="red">
                    <a
                      href="https://www.primevideo.com/?tag=serier-20"
                      target="_blank"
                      className="hover:no-underline text-white hover:text-white text-md font-medium"
                    >
                      SE SERIE PÅ AMAZON PRIME <br /> Start din gratis
                      prøveperiode
                    </a>
                  </Button>
                  <span className="italic my-3">*Annoncelink</span> <br />
                  <span className="text-sm text-white w-64 italic mb-10 lg:text-lg">
                    <br /> Se eksklusive Amazon Originals og populære film og
                    TV-serier for DKK 45/måned. Se nu, opsig når som helst.
                  </span>
                  <JustWatchLogo />
                </div>
              );
            }
          })}
        </div>
      </Layout>
    </>
  );
};

const fetcher = (url: RequestInfo) => fetch(url).then(r => r.json())

export async function getServerSideProps(router) {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.

   const details = await fetcher(
    `https://api.themoviedb.org/3/tv/${router.query.id}?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da
    `
  );

  const trailer = await fetcher(
    `https://api.themoviedb.org/3/tv/${router.query.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=en-US
    `
  );

  const providers = await fetcher(
    `https://api.themoviedb.org/3/tv/${router.query.id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_API_SECRET}
    `
  );

  return { props: { details, trailer, providers } }
}

export function Posts (props) {
  // Here the `fetcher` function will be executed on the client-side.
  const { data, error } = useSWR(props, fetcher, { initialData: props })

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  return <></>

}

export default SerieInfo;
