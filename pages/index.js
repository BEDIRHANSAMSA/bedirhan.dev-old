import useSWR from 'swr';
import {SiSpotify} from "react-icons/si";

function HomePage() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotify', fetcher);
    return (
        <>
            <div className="site-container">
                <div>
                    <h1 className="text-4xl font-bold leading-normal">
                        Hey there<span className="animate-pulse rounded-full bg-purple-400">&#128075;</span> My name is Bedirhan and I am Software Developer. I am creating modern and responsive
                        applications.
                    </h1>
                    <div className="mt-5 leading-loose text-xl font-light">
                        <p>
                            I am interested in topics such as C#, Computer Technologies, science, sociology.
                        </p>
                        <p>
                            I am a 2nd-year student at Istanbul Medipol University.
                        </p>
                    </div>
                </div>
            </div>

            <div className="site-4xl-container">
                <svg className="mx-auto" width="720" height="640" viewBox="0 0 1080 1080" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1080 1080C720.03 1080 360.06 1080 0 1080C0 720.07 0 360.11 0 0C359.94 0 719.97 0 1080 0C1080 359.94 1080 719.95 1080 1080ZM596.26 629.17C597.43 629.17 599.04 629.17 600.65 629.17C625.32 629.17 649.99 629.22 674.65 629.15C699.69 629.07 720.93 620.17 738.2 601.8C750.71 588.5 759.03 573.21 761.48 555C765.69 523.69 756.84 496.55 733.65 475.08C717.06 459.72 696.79 452.39 673.93 452.41C577.59 452.49 481.25 452.45 384.91 452.47C383.5 452.47 382.08 452.68 380.48 452.81C380.48 468.19 380.62 483.02 380.39 497.84C380.33 501.89 381.57 502.85 385.5 502.84C480.5 502.73 575.51 502.75 670.52 502.77C673.85 502.77 677.36 502.3 680.47 503.18C686.16 504.79 692.35 506.2 697.02 509.53C713.7 521.42 716.3 539.23 710.12 556.52C705.99 568.05 691.2 579.33 675.39 579.3C646.39 579.25 617.38 579.64 588.39 579.02C581.93 578.88 575.38 575.72 569.17 573.19C560.79 569.77 557.26 561.46 552.36 554.66C550.52 552.11 548.8 550.93 545.52 550.93C488.35 551.04 431.18 551.01 374.01 551.01C372.22 551.01 370.44 551.01 367.96 551.01C367.96 484.8 367.96 419.1 367.96 353.35C366.78 353.35 366.26 353.24 365.82 353.37C364.87 353.65 363.93 354.01 363.02 354.41C343.36 363.1 329.34 377.34 321.98 397.55C319.69 403.84 318.09 410.79 318.07 417.43C317.83 519.11 317.9 620.79 317.92 722.47C317.92 724.21 318.08 725.96 318.16 727.71C319.64 727.79 320.47 727.87 321.3 727.87C383.97 727.87 446.64 727.86 509.31 727.83C512.14 727.83 515.01 727.85 517.78 727.37C548.25 722.09 572.02 707.13 585.67 678.65C589.56 670.53 592.31 661.67 594.25 652.86C595.89 645.39 595.63 637.47 596.26 629.17ZM380.82 351.97C380.82 368.55 380.82 384.77 380.82 401.18C507.92 401.18 634.77 401.18 761.7 401.18C759.92 393.54 752.64 381.35 745.81 374.82C730.24 359.93 711.91 351.94 690.09 351.99C629.93 352.11 569.77 351.99 509.61 351.98C466.96 351.97 424.31 351.97 380.82 351.97Z"
                        fill="white"/>
                    <path
                        d="M596.26 629.17C595.63 637.47 595.89 645.39 594.24 652.88C592.3 661.69 589.56 670.55 585.66 678.67C572.01 707.15 548.24 722.11 517.77 727.39C515 727.87 512.12 727.85 509.3 727.85C446.63 727.88 383.96 727.89 321.29 727.89C320.46 727.89 319.64 727.81 318.15 727.73C318.07 725.98 317.91 724.23 317.91 722.49C317.9 620.81 317.82 519.13 318.06 417.45C318.08 410.8 319.67 403.85 321.97 397.57C329.34 377.36 343.35 363.12 363.01 354.43C363.92 354.03 364.86 353.67 365.81 353.39C366.25 353.26 366.77 353.37 367.95 353.37C367.95 419.12 367.95 484.82 367.95 551.03C370.43 551.03 372.21 551.03 374 551.03C431.17 551.03 488.34 551.06 545.51 550.95C548.79 550.94 550.52 552.13 552.35 554.68C557.25 561.48 560.78 569.79 569.16 573.21C575.36 575.74 581.92 578.9 588.38 579.04C617.37 579.66 646.38 579.27 675.38 579.32C691.19 579.35 705.98 568.07 710.11 556.54C716.3 539.25 713.69 521.45 697.01 509.55C692.34 506.22 686.15 504.81 680.46 503.2C677.35 502.32 673.84 502.79 670.51 502.79C575.5 502.78 480.5 502.76 385.49 502.86C381.56 502.86 380.32 501.9 380.38 497.86C380.61 483.04 380.47 468.21 380.47 452.83C382.08 452.7 383.49 452.49 384.9 452.49C481.24 452.47 577.58 452.52 673.92 452.43C696.78 452.41 717.05 459.74 733.64 475.1C756.83 496.57 765.68 523.7 761.47 555.02C759.02 573.23 750.69 588.52 738.19 601.82C720.92 620.19 699.68 629.09 674.64 629.17C649.97 629.25 625.3 629.19 600.64 629.19C599.04 629.17 597.43 629.17 596.26 629.17ZM368.29 677.91C369.32 678.07 369.96 678.26 370.6 678.26C415.27 678.28 459.94 678.43 504.6 678.2C517.38 678.13 528.59 673.85 537.08 663.44C546.94 651.35 548.78 637.78 542.71 624.18C535.79 608.66 522.94 600.57 505.42 600.6C461.25 600.69 417.08 600.63 372.92 600.64C371.47 600.64 370.02 600.77 368.29 600.86C368.29 626.61 368.29 652.03 368.29 677.91Z"
                        fill="#161617"/>
                    <path
                        d="M380.82 351.97C424.3 351.97 466.96 351.96 509.62 351.97C569.78 351.98 629.94 352.1 690.1 351.98C711.92 351.94 730.25 359.92 745.82 374.81C752.64 381.34 759.93 393.53 761.71 401.17C634.77 401.17 507.93 401.17 380.83 401.17C380.82 384.77 380.82 368.55 380.82 351.97Z"
                        fill="#181819"/>
                    <path
                        d="M368.29 677.91C368.29 652.03 368.29 626.61 368.29 600.86C370.02 600.77 371.47 600.64 372.92 600.64C417.09 600.63 461.26 600.68 505.42 600.6C522.94 600.57 535.79 608.66 542.71 624.18C548.78 637.79 546.94 651.35 537.08 663.44C528.59 673.85 517.38 678.13 504.6 678.2C459.93 678.43 415.26 678.28 370.6 678.26C369.96 678.26 369.32 678.07 368.29 677.91Z"
                        fill="#FEFDFE"/>
                </svg>
            </div>

            <div className="site-container">
                <div  className='flex items-center justify-center'>
                    <a
                        target='_blank'
                        rel='noopener noreferer'
                        href={
                            data?.isPlaying
                                ? data.songUrl
                                : 'https://open.spotify.com/user/hb8cd66cli5ire7hpt67765rg'
                        }
                        className='relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72'
                    >
                        <div className='w-16'>
                            {data?.isPlaying ? (
                                <img
                                    className='w-16 shadow-sm'
                                    src={data?.albumImageUrl}
                                    alt={data?.album}
                                />
                            ) : (
                                <SiSpotify size={64} color={'#1ED760'} />
                            )}
                        </div>

                        <div className='flex-1'>
                            <p className='font-bold component'>
                                {data?.isPlaying ? data.title : 'Not Listening'}
                            </p>
                            <p className='text-xs font-dark'>
                                {data?.isPlaying ? data.artist : 'Spotify'}
                            </p>
                        </div>
                        <div className='absolute bottom-1.5 right-1.5'>
                            <SiSpotify size={20} color={'#1ED760'} />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomePage
