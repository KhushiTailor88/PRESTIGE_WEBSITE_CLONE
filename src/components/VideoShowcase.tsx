import React, { useState, useRef } from 'react';

const VideoShowcase: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleProgressJump = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current && progressRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            videoRef.current.currentTime = pos * duration;
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleFullscreen = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    };

    return (
        <section className="bg-[#efefef] w-full overflow-hidden h-[300px] md:h-[650px] relative group font-heading">
            <div
                className="relative w-full h-full cursor-pointer"
                onClick={togglePlay}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => isPlaying && setShowControls(false)}
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover block"
                    poster="//prestige-theme-allure.myshopify.com/cdn/shop/files/preview_images/686fc38c1584488793cb47f95193f422.thumbnail.0000000000_400x.jpg?v=1677578139"
                    playsInline
                    muted={isMuted}
                    loop
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    <source
                        src="//prestige-theme-allure.myshopify.com/cdn/shop/videos/c/vp/686fc38c1584488793cb47f95193f422/686fc38c1584488793cb47f95193f422.HD-1080p-4.8Mbps-12729205.mp4?v=0"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Main Play Overlay (Centered) */}
                <div className={`absolute inset-0 z-2 flex flex-col items-center justify-center transition-all duration-700 bg-black/10 ${isPlaying ? 'opacity-0 pointer-events-none transform scale-105' : 'opacity-100'}`}>
                    <div className="text-center text-brand-white px-4">
                        <span className="block text-[10px] tracking-[0.3em] uppercase mb-4 font-medium opacity-90 drop-shadow-md">THE ART OF CRAFT</span>
                        <h2 className="text-[clamp(24px,4vw,42px)] leading-[1.1] font-normal tracking-[0.05em] uppercase mb-8 drop-shadow-lg">EVERY DETAIL MATTERS</h2>

                        <div className="group/play flex items-center justify-center">
                            <div className="w-[64px] h-[64px] border border-brand-white/30 rounded-full flex items-center justify-center transition-all duration-500 group-hover/play:scale-110 group-hover/play:border-brand-white/60 relative">
                                <div className="absolute inset-0 border border-brand-white/40 rounded-full animate-ping opacity-20"></div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-brand-white ml-0.5">
                                    <path d="M7 6v12l10-6z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Control Bar (Bottom) */}
                <div
                    className={`absolute bottom-0 left-0 right-0 z-10 p-6 transition-all duration-500 bg-linear-to-t from-black/60 to-transparent ${showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Progress Bar */}
                    <div
                        ref={progressRef}
                        className="relative h-1 w-full bg-brand-white/20 mb-4 cursor-pointer group/progress"
                        onClick={handleProgressJump}
                    >
                        <div
                            className="absolute top-0 left-0 h-full bg-brand-white transition-all duration-100"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-brand-white text-[10px] tracking-widest font-medium uppercase px-1">
                        <div className="flex items-center gap-6">
                            <button onClick={togglePlay} className="hover:opacity-70 transition-opacity">
                                {isPlaying ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                )}
                            </button>

                            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <button onClick={toggleMute} className="hover:opacity-70 transition-opacity">
                                {isMuted ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" /></svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" /></svg>
                                )}
                            </button>

                            <button onClick={handleFullscreen} className="hover:opacity-70 transition-opacity">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
