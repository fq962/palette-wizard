const useCopyToClipboard = () => {
  const copyToClipboard = (props: { textToCopy: string }) => {
    const { textToCopy } = props;

    navigator.clipboard.writeText(textToCopy);
  };

  return { copyToClipboard };
};

export default useCopyToClipboard;
