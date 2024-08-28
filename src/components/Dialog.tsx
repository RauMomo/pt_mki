
import classNames from "classnames";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { HiX } from 'react-icons/hi';
import Modal from "react-modal";
import styles from "../components/css/Dialog.module.css";

interface CloseButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  absolute?: boolean;
  className?: string;
  defaultStyle?: boolean;
  svgClass?: string;
}

const CloseButton = React.forwardRef<HTMLSpanElement, CloseButtonProps>(
  (props, ref) => {
    const {
      absolute,
      className,
      defaultStyle = true,
      svgClass,
      ...rest
    } = props;
    const closeButtonAbsoluteClass = "absolute z-10";

    const closeButtonClass = classNames(
      "close-btn",
      defaultStyle && "close-btn-default",
      absolute && closeButtonAbsoluteClass,
      className,
    );

    console.log('display close button')

    return (
      <span className={closeButtonClass} role="button" {...rest} ref={ref}>
        <HiX className={svgClass} />
      </span>
    );
  },
);

CloseButton.defaultProps = {
  defaultStyle: true,
};

const Dialog: React.FC<any> = (props: any) => {
  const {
    children,
    className,
    closable,
    width,
    height,
    style,
    isOpen,
    onClose,
    bodyOpenClassName,
    portalClassName,
    overlayClassName,
    contentClassName,
    closeTimeoutMS,
    ...rest
  } = props;

  const onCloseClick = (e: any) => {
    onClose(e);
  };

  const renderCloseButton = (
    <CloseButton
      onClick={onCloseClick}
      className="ltr:right-6 rtl:left-6 py-4"
    />
  );

  const contentStyle = {
    content: {
      inset: "unset",
    },
    ...style,
  };

  if (width !== undefined) {
    contentStyle.content.width = "auto";

    // if (
    //   currentSize.width! <=
    //   parseInt(themeSet`screens.sm`.split(/ /)[0].replace(/[^\d]/g, ""))
    // ) {
    //   contentStyle.content.width = "auto";
    // }
  }
  if (height !== undefined) {
    contentStyle.content.height = height;
  }

  const defaultDialogContentClass = "dialog-content";

  const dialogClass = classNames(styles.dialogContent, contentClassName);

  return (
    <Modal
      className={{
        base: classNames(styles.dialog, className),
        afterOpen: styles.dialogAfterOpen,
        beforeClose: styles.dialogAfterOpen,
      }}
      overlayClassName={{
        base: classNames(styles.dialogOverlay, overlayClassName),
        afterOpen: styles.dialogOverlayAfterOpen,
        beforeClose: styles.dialogOverlayBeforeClose,
      }}
      portalClassName={classNames("dialog-portal", portalClassName)}
      bodyOpenClassName={classNames("dialog-open", bodyOpenClassName)}
      ariaHideApp={false}
      isOpen={isOpen}
      style={{ ...contentStyle }}
      closeTimeoutMS={closeTimeoutMS}
      {...rest}
    >
      <motion.div
        className={dialogClass}
        initial={{ transform: "scale(0.9)" }}
        animate={{
          transform: isOpen ? "scale(1)" : "scale(0.9)",
        }}
      >
        {closable && renderCloseButton}
        {children}
      </motion.div>
    </Modal>
  );
};

Dialog.propTypes = {
  closable: PropTypes.bool ?? true,
  isOpen: PropTypes.bool.isRequired,
  overlayClassName: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) ?? 520,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClose: PropTypes.func,
  portalClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  closeTimeoutMS: PropTypes.number ?? 150,
  bodyOpenClassName: PropTypes.string,
};

export default Dialog;

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

