export const parseScriptTitle = (script: string) => {
  const TITLE_PREFIX = '제목 : ';
  const lines = script
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);

  const scriptTitle = lines[0].replace(TITLE_PREFIX, '');
  //   const scenes = lines
  //     .map((line, index) => {
  //       if (line.startsWith('[') && lines[index + 1]) {
  //         return { title: line, content: lines[index + 1] };
  //       }
  //       return null;
  //     })
  //     .filter((scene) => scene !== null);

  //   const { title, content } = scenes[0] || {};
  // return `${TITLE_PREFIX}${scriptTitle}\n${title}${content}`;
  return `${TITLE_PREFIX}${scriptTitle}`;
};

export const parseScript = (originScript: string) => {
  const ideaPrefix = '아이디어 : ';
  const ideaStart = originScript.indexOf(ideaPrefix);
  const NO_IDEA_PREFIX = -1;

  if (ideaStart === NO_IDEA_PREFIX) return { script: originScript.trim(), idea: null };

  const ideaEnd = originScript.indexOf('\n', ideaStart);
  const idea = originScript
    .slice(ideaStart + ideaPrefix.length, ideaEnd !== NO_IDEA_PREFIX ? ideaEnd : undefined)
    .trim();

  const script =
    originScript.slice(0, ideaStart).trim() +
    (ideaEnd !== NO_IDEA_PREFIX ? '\n' + originScript.slice(ideaEnd).trim() : '');

  return { script, idea };
};
