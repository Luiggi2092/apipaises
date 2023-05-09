import Player from "@madzadev/audio-player";
import style from "./Player.module.css"

const Player1 = ()=>{
    
    const tracks = [
        {
          url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
          title: "Madza - Chords of Life",
          tags: ["house"],
        },
        {
          url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
          title: "Madza - Late Night Drive",
          tags: ["dnb"],
        },
        {
          url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
          title: "Madza - Persistence",
          tags: ["dubstep"],
        },
      ];


     return (
        <div className={style.play}>
            <Player className={style.reproductor} trackList={tracks}
                    includeTags={false}
                    includeSearch={false}
                    showPlaylist={false}
                    autoPlayNextTrack={false}/>
                
        </div>
     )

}


export default Player1