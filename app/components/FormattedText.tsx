import { Stack } from "@mui/material";
import React, { FC } from "react";
import gStyles from "@/app/styles/global.module.scss";

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
          const segments = line.split(urlRegex);
          return (
            <p key={lineIndex} className={gStyles.text}>
              {segments.map((segment, segmentIndex) => {
                if (segment.match(urlRegex)) {
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
