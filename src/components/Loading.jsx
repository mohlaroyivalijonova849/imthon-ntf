// import * as React from "react";
// import Stack from "@mui/material/Stack";
// import CircularProgress from "@mui/material/CircularProgress";

// export default function CircularDeterminate() {
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 0 : prevProgress + 10
//       );
//     }, 800);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <Stack spacing={2} direction="row">
//       <CircularProgress variant="determinate" value={progress} />
//     </Stack>
//   );
// }

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader">Loading</div>
    </div>
  );
}

export default Loader;
