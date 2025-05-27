// // // import React from 'react';
// // // import { FaSpotify, FaApple } from 'react-icons/fa';
// // //
// // // const Music = () => {
// // //     return (
// // //         <section id="music" className="bg-white text-black px-6 py-16 font-sans">
// // //             <div className="max-w-4xl mx-auto">
// // //                 <h2 className="text-4xl font-bold mb-6 border-b-4 border-black inline-block">
// // //                     Music
// // //                 </h2>
// // //
// // //                 <p className="text-lg mb-8">
// // //                     I Listen to Music All the Time!
// // //                     {/*<span className="italic font-semibold">Pradyun</span>. I enjoy creating subtle scores, ambient textures, and atmospheric pieces, often inspired by film or memory.*/}
// // //                 </p>
// // //
// // //                 <div className="flex space-x-6 items-center mb-8">
// // //                     <a
// // //                         href="https://open.spotify.com/user/z49xhylh3jqjx48hyjtu9j51p?si=ac1ea297eab94a5d"
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                         className="flex items-center space-x-2 hover:text-green-500 transition"
// // //                     >
// // //                         <FaSpotify size={28}/>
// // //                         <span className="text-lg font-medium">Spotify</span>
// // //                     </a>
// // //
// // //                     <a
// // //                         href="https://music.apple.com/profile/pradyundevarakonda24"
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                         className="flex items-center space-x-2 hover:text-red-500 transition"
// // //                     >
// // //                         <FaApple size={28}/>
// // //                         <span className="text-lg font-medium">Apple Music</span>
// // //                     </a>
// // //                 </div>
// // //
// // //                 {/*<iframe*/}
// // //                 {/*    style={{ borderRadius: '12px' }}*/}
// // //                 {/*    // src="https://open.spotify.com/embed/artist/5nNQUBNe7hIey9hS1x9Bh7?utm_source=generator"*/}
// // //                 {/*    src = "https://music.apple.com/in/playlist/musical-marathon/pl.u-jV890ggFDNGNYdl"*/}
// // //                 {/*    width="100%"*/}
// // //                 {/*    height="352"*/}
// // //                 {/*    frameBorder="0"*/}
// // //                 {/*    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"*/}
// // //                 {/*    loading="lazy"*/}
// // //                 {/*></iframe>*/}
// // //                 <iframe
// // //                     allow="autoplay *; encrypted-media *;"
// // //                     frameBorder="0"
// // //                     height="450"
// // //                     style={{
// // //                         width: '100%',
// // //                         maxWidth: '660px',
// // //                         overflow: 'hidden',
// // //                         background: 'transparent'
// // //                     }}
// // //                     sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
// // //                     src="https://embed.music.apple.com/in/playlist/musical-marathon/pl.u-jV890ggFDNGNYdl"
// // //                 />
// // //
// // //             </div>
// // //         </section>
// // //     );
// // // };
// // //
// // // export default Music;
// // import React from 'react';
// // import { FaSpotify, FaApple } from 'react-icons/fa';
// //
// // const Music = () => {
// //     return (
// //         <section id="music" className="bg-[#121212] text-white px-6 py-16 font-sans">
// //             <div className="max-w-4xl mx-auto">
// //                 <h2 className="text-4xl font-bold mb-6 border-b-4 border-[#fa233b] inline-block">
// //                     Music
// //                 </h2>
// //
// //                 <p className="text-lg mb-8">
// //                     I listen to music all the time — it's a core part of my creative process.
// //                 </p>
// //
// //                 <div className="flex space-x-6 items-center mb-10">
// //                     <a
// //                         href="https://open.spotify.com/user/z49xhylh3jqjx48hyjtu9j51p?si=ac1ea297eab94a5d"
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="flex items-center space-x-2 hover:text-green-400 transition"
// //                     >
// //                         <FaSpotify size={28} className="text-white" />
// //                         <span className="text-lg font-medium">Spotify</span>
// //                     </a>
// //
// //                     <a
// //                         href="https://music.apple.com/profile/pradyundevarakonda24"
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="flex items-center space-x-2 hover:text-[#fa233b] transition"
// //                     >
// //                         <FaApple size={28} className="text-white" />
// //                         <span className="text-lg font-medium">Apple Music</span>
// //                     </a>
// //                 </div>
// //
// //                 <div className="rounded-xl overflow-hidden border border-[#fa233b]">
// //                     <iframe
// //                         title="Apple Music Playlist: Musical Marathon"
// //                         allow="autoplay *; encrypted-media *;"
// //                         frameBorder="0"
// //                         height="450"
// //                         style={{
// //                             width: '100%',
// //                             maxWidth: '660px',
// //                             overflow: 'hidden',
// //                             background: 'transparent',
// //                         }}
// //                         sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
// //                         src="https://embed.music.apple.com/in/playlist/musical-marathon/pl.u-jV890ggFDNGNYdl"
// //                     />
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };
// //
// // export default Music;
//
// // src/components/Music.jsx
// import React from 'react';
// import { FaSpotify, FaApple } from 'react-icons/fa';
//
// const Music = () => {
//     return (
//         <div className="w-64 md:w-80 bg-[#121212] text-white p-6 rounded-xl shadow-2xl">
//             <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#fa233b] pb-2">
//                 Music
//             </h3>
//             <p className="text-sm mb-6">
//                 I listen to music constantly—beats fuel my creativity.
//             </p>
//             <a href="https://open.spotify.com" target="_blank">Test Spotify</a>
//
//             <div className="flex space-x-4 mb-6">
//                 <a
//                     href="https://open.spotify.com/user/z49xhylh3jqjx48hyjtu9j51p?si=ac1ea297eab94a5d"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-green-400 transition"
//                 >
//                     <FaSpotify size={24} />
//                 </a>
//                 <a
//                     href="https://music.apple.com/profile/pradyundevarakonda24"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-[#fa233b] transition"
//                 >
//                     <FaApple size={24} />
//                 </a>
//             </div>
//             <div className="rounded-md overflow-hidden border border-[#fa233b]">
//                 <iframe
//                     title="Apple Music Playlist: Musical Marathon"
//                     allow="autoplay *; encrypted-media *;"
//                     frameBorder="0"
//                     height="200"
//                     style={{
//                         width: '100%',
//                         overflow: 'hidden',
//                         background: 'transparent',
//                     }}
//                     sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
//                     src="https://embed.music.apple.com/in/playlist/musical-marathon/pl.u-jV890ggFDNGNYdl"
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default Music;

import React from 'react';
import { FaSpotify, FaApple } from 'react-icons/fa';

const Music = () => {
    return (
        <div className="relative z-10 pointer-events-auto w-64 md:w-80 bg-[#121212] text-white p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#fa233b] pb-2">
                Music
            </h3>
            <p className="text-sm mb-6">
                I listen to music constantly—beats fuel my creativity.
            </p>
            <div className="flex space-x-4 mb-6">
                <a
                    href="https://open.spotify.com/user/z49xhylh3jqjx48hyjtu9j51p?si=ac1ea297eab94a5d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition cursor-pointer"
                >
                    <FaSpotify size={24} />
                </a>
                <a
                    href="https://music.apple.com/profile/pradyundevarakonda24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fa233b] transition cursor-pointer"
                >
                    <FaApple size={24} />
                </a>
            </div>
            <div className="rounded-md overflow-hidden border border-[#fa233b]">
                <iframe
                    title="Apple Music Playlist: Musical Marathon"
                    allow="autoplay *; encrypted-media *;"
                    frameBorder="0"
                    height="200"
                    style={{
                        width: '100%',
                        overflow: 'hidden',
                        background: 'transparent',
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/in/playlist/musical-marathon/pl.u-jV890ggFDNGNYdl"
                />
            </div>
        </div>
    );
};

export default Music;
