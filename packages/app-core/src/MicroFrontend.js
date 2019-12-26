import React from "react";

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    console.log(
      document.getElementById(scriptId),
      { Data: `${host}/asset-manifest.json` },
      "DDDDDDcomponentDidMount"
    );

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = this.renderMicroFrontend;

        console.log(
          scriptId,
          script,
          manifest,
          `${host}${manifest.files["runtime-main.js"]}`,
          "DDDDDDcomponentDidMount"
        );
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;
    console.log(
      { func: `unmount${name}`, name, window },
      "componentWillUnmount adsasd"
    );

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;

    console.log(
      { name: `render${name}`, func: window[`render${name}`], window, history },
      "renderMicroFrontend adsasd"
    );

    if (typeof window[`render${name}`] !== "undefined") {
      // safe to use the function
      alert("Yehh boy");
    }

    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window
};

export default MicroFrontend;
