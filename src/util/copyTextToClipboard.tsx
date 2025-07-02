export default function copyTextToClipboard(text: string = "") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text successfully copied to clipboard.");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  } else {
    // Fallback for browsers that don't support the Clipboard API.
    const temporaryTextArea = document.createElement("textarea");
    temporaryTextArea.value = text;
    document.body.appendChild(temporaryTextArea);
    temporaryTextArea.select();
    temporaryTextArea.setSelectionRange(0, 99999);

    try {
      document.execCommand("copy");
      console.log("Fallback: Text successfully copied to clipboard.");
    } catch (error) {
      console.error("Fallback: Failed to copy text: ", error);
    }

    document.body.removeChild(temporaryTextArea);
  }
}

