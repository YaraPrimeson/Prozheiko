import { Stack } from "@mui/material";
import React, { FC } from "react";

const urlRegex = /(http[s]?:\/\/[^\s]+)/g;

interface FormattedTextProps {
  text: string;
}

const FormattedText: FC<FormattedTextProps> = ({ text }) => {
  const lines = text.split("\n");

  return (
    <Stack sx={{ wordBreak: "break-word" }}>
      <>
        {lines.map((line, lineIndex) => {
          // Split the line into segments by finding links with regex
          const segments = line.split(urlRegex);

          return (
            <p key={lineIndex}>
              {segments.map((segment, segmentIndex) => {
                // Check if the segment is a link
                if (segment.match(urlRegex)) {
                  // If it is, wrap it in an anchor tag
                  return (
                    <a
                      key={segmentIndex}
                      href={segment}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#FFFFFF" }}
                    >
                      {segment}
                    </a>
                  );
                } else {
                  // Otherwise, just render the segment as plain text
                  return <span key={segmentIndex}>{segment}</span>;
                }
              })}
              <br />
            </p>
          );
        })}
      </>
    </Stack>
  );
};

export default FormattedText;
