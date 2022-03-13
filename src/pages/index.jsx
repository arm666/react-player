import React from "react";
import Plyr from "plyr-react";

const Home = () => {
  const [file, setFile] = React.useState(null);
  const ref = React.useRef(null);
  console.log(ref);
  console.log(file);

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setFile(URL.createObjectURL(event.target.files[0]));
        }}
        name="file"
        id="file"
      />

      {Boolean(file) && (
        <div></div>
        // <Plyr
        //   ref={ref}
        //   source={{
        //     type: "video",
        //     sources: [
        //       {
        //         src: file,
        //       },
        //     ],
        //   }}
        //   options={
        //     {
        //       /* ... */
        //     }
        //   }
        // />
      )}
    </div>
  );
};

export default Home;
