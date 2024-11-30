import { toast } from "sonner";

const useCopyToClipboard = () => {
  const copyToClipboard = (props: {
    textToCopy: string;
    isGeneralText: boolean;
  }) => {
    const { textToCopy, isGeneralText } = props;

    const message = isGeneralText
      ? "Copied to clipboard!"
      : "Color copied to clipboard!";

    navigator.clipboard.writeText(textToCopy);

    toast.success(message, {
      className: "font-sf-display bg-white opacity-75 hidden xl:flex",
      position: "bottom-center",
      style: {
        border: `1px solid ${isGeneralText ? "#000000" : textToCopy}`,
      },
    });
  };

  return { copyToClipboard };
};

export default useCopyToClipboard;
