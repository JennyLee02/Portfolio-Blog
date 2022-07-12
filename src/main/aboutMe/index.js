import "./index.css";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="AboutMeitems">
        <span className="AboutMeTitle">ABOUT ME</span>
        <p className="intro">Welcome to MAKERSPACE J.L!</p>
        <p className="About">
          My name is Jenny Lee, I am a Computer Engineering student
          <br />
          at University of Waterloo located in Waterloo, Ontario.
          <br />
          I have created this blog to share my projects and thought on
          <br />
          different topics related to technology. Just like how this blog is
          <br />
          named, I would like this blog to be a place where I can freely try
          <br />
          different projects and interact with viewer to get inspired!
          <br />
          So, feel free to leave a comment and share your throught on my
          project!
          <br />
          Welcome! And have Fun!
        </p>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default AboutMe;
