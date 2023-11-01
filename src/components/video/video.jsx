import styles from './video.module.css'

const Video = () => {
  return (
    <div className={styles.vismeContainer}>
    <div dangerouslySetInnerHTML={{
      __html: `
        <script src="//my.visme.co/visme-embed.js"></script>
        <iframe id="embedded-project-iframe" title="ubivi" src="//my.visme.co/_embed/pvjqdm6g-ubivi" style="border: 0; width:100%; height:100%;" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen=""></iframe>
      `,
    }} />
</div>
  );
};

export default Video;