export const parseScriptTitle = (script: string) => {
  const TITLE_PREFIX = '제목 : ';
  const lines = script
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);

  const scriptTitle = lines[0].replace(TITLE_PREFIX, '');
  return `${TITLE_PREFIX}${scriptTitle}`;
};

export const splitScriptAndIdeas = (originScript: string) => {
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

export const splitScriptAndAdvice = (inputString: string) => {
  console.log(inputString);
  const advicePattern = /\d+\.\s/;
  const adviceIndex = inputString.search(advicePattern);

  if (adviceIndex === -1) {
    return [inputString, ''];
  }

  const script = inputString.slice(0, adviceIndex).trim();
  const advice = inputString.slice(adviceIndex).trim();

  const scriptLines = script.split('\n');
  scriptLines.pop();
  const finalScript = scriptLines.join('\n').trim();

  return [finalScript, advice];
};
