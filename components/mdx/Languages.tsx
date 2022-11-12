import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { languages, state } from "lib/state";
import { Fragment, useEffect, useState } from "react";

const Languages = () => {
  const [language, setLanguage] = state((s) => [s.language, s.setLanguage]);
  const [_, setLang] = useState<string>();

  useEffect(() => {
    setLang(language);
  }, [language]);

  return (
    <Tab.Group>
      <Tab.List as="div" className="flex space-x-2">
        {languages.map((l) => (
          <Tab key={l} as={Fragment}>
            {({ selected }) => (
              <button
                onClick={() => setLanguage(l)}
                className={clsx(
                  "py-1 px-3 rounded-lg font-semibold shadow tracking-tight",
                  selected
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-black hover:bg-slate-200"
                )}
              >
                {l}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
};

export default Languages;
