import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
const ZOHO_IFRAME_SRC = "https://crm.zoho.com.au/crm/WebFormServeServlet?rid=e24ce3f4bfedc54d2f0586348addb6b7343e19853b71a23044e253157d72ba86e2a43b251f4bfa545747ce65a0a2b6eegid24f4dfa5c7f5b4318ab35f992bf3c1223c9ce819e9f7ae9d6ad1f974de7dbbbb";
function ContactForm({ className = "" }) {
  useEffect(() => {
    function wfa_pstMesgFrmFom(evt) {
      if (evt.origin !== "https://crm.zoho.com.au" && evt.origin !== "https://crm.zohopublic.com.au") {
        return;
      }
      const locObj = JSON.stringify({
        origin: window.location.origin,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash
      });
      if (evt.source) {
        evt.source.postMessage(`prnt_wnd_pg_lc_rc_frm_prwindow_${locObj}`, evt.origin);
      }
    }
    window.addEventListener("message", wfa_pstMesgFrmFom, false);
    return () => {
      window.removeEventListener("message", wfa_pstMesgFrmFom, false);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: `zoho-iframe-shell ${className}`, children: /* @__PURE__ */ jsx(
    "iframe",
    {
      title: "AVA Next Zoho contact form",
      width: "910",
      height: "450",
      src: ZOHO_IFRAME_SRC,
      className: "zoho-contact-iframe"
    }
  ) });
}
export {
  ContactForm as C
};
