import styles from './VideoSlot.module.css';

function VideoSlot({ title }) {
    return (
        <figure className={styles.VideoSlot}>
            {/*
              ================================================================
              VIDEO EMBED PLACEHOLDER: TravelAIde demo
              Replace the <div data-video-placeholder> below with your iframe:

              <iframe
                className={styles.Frame}
                src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
                title={`${title} demo video`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              ================================================================
            */}
            <div className={styles.Frame} data-video-placeholder={title}>
                <span className={styles.Label}>Video placeholder</span>
            </div>
        </figure>
    );
}

export default VideoSlot;
