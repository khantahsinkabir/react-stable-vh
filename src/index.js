import React from "react"


const StableVH = () => {

  const [ RealAttribute, setRealAttribute ] = React.useState('')

  React.useEffect(() => {
    if (screen.orientation && !RealAttribute) {
      setRealAttribute(document.querySelector('meta[name="viewport"]').getAttribute('content'));
    };
    if (screen.orientation && RealAttribute) {
      windowSizeChanged();
      screen.orientation.addEventListener("change", windowSizeChanged, { passive: true });
    };
    return () => {
      if (screen.orientation && RealAttribute) {
        document.querySelector('meta[name="viewport"]').setAttribute("content", RealAttribute);
        screen.orientation.removeEventListener("change", windowSizeChanged);
        setRealAttribute('');
      };
    };
  }, [RealAttribute])

  const windowSizeChanged = () => {
    document.querySelector('meta[name="viewport"]').setAttribute("content", `width=${window.innerWidth}, height=${window.innerHeight}, ${RealAttribute.replace('width=device-width, ','')}`); //, user-scalable=0
  };


	return(
    <></>
  );
};

export default StableVH