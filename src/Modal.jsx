export default function Modal(props) {
    const { show, children } = props;
    if (!show) {
        return null;
    }
    return <div className="flex-col flex">{children}</div>;
  }
  // filled = true är default prop värde.
  function Header(props) {
    const { children } = props;
    // styla här sen:
    return <div className={""}>{children}</div>;
  }
  function Body(props) {
    const { children } = props;
    // styla här sen:
    return <div className={""}>{children}</div>;
  }
  function Footer(props) {
    const { children } = props;
    // styla här sen:
    return <div className={""}>{children}</div>;
  }
  
  Modal.Header = Header;
  Modal.Body = Body;
  Modal.Footer = Footer;
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
