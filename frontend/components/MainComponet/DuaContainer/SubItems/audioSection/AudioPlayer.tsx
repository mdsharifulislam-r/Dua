'use client'
import React, { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { CiRepeat } from "react-icons/ci";
const AudioPlayer = ({src}:{src:string}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [progress, setProgress] = useState<number>(0);

    // Update progress when audio is playing
    const handleProgress = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration || 1; // Prevent division by 0
            setProgress((current / duration) * 100);
        }
    };

    // Seek audio when the progress bar changes
    const seekAudio = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime = (parseFloat(event.target.value) / 100) * (audioRef.current.duration || 0);
            audioRef.current.currentTime = newTime;
            setProgress(parseFloat(event.target.value));
        }
    };

    const [play,setPlay]=useState(false)
    const playAudio = () =>{
        if(!play){
            audioRef?.current?.play()
            setPlay(!play)
        }else{
            audioRef?.current?.pause()
            setPlay(!play)
        }
    }
    return (
        <div className='flex place-items-center gap-2 w-[60%]'>
            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                onTimeUpdate={handleProgress}
                src={src}
                preload="metadata"
                
            ></audio>
            <div onClick={playAudio} className='p-3 bg-primary_color text-white flex justify-center place-items-center text-xl rounded-full'>
                <FaPlay/>
            </div>
            {/* Custom scrollbar */}
           {play? <div className='flex place-items-center gap-4'>
            <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={seekAudio}
                style={{
                    width: '100%',
                    marginTop: '10px',
                    appearance: 'none',
                    height: '6px',
                 
                    borderRadius: '4px',
                    outline: 'none',
                    cursor: 'pointer',
                  
                }}
                className=' accent-primary_color bg-primary_color'
            />
            <span>
                2:20
            </span>
            <span className='text-2xl'>
                <CiRepeat/>
            </span>
            </div>:""}
       
        </div>
    );
};

export default AudioPlayer
