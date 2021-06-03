import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import {
  CharactersContext,
  useCharacters,
} from "../lib/contexts/CharactersContext/CharactersContext";
import { DiceContext, useDice } from "../lib/contexts/DiceContext/DiceContext";
import {
  ScenesContext,
  useScenes,
} from "../lib/contexts/SceneContext/ScenesContext";
import {
  SettingsContext,
  useSettings,
} from "../lib/contexts/SettingsContext/SettingsContext";
import { AppDarkTheme, AppLightTheme } from "../lib/theme";

/**
 * The Fate Font is served using the `-s` option on the package.json
 * Also see .storybook/preview-head.html
 */
export function StoryProvider(props: {
  children: JSX.Element;
  theme: "light" | "dark";
}) {
  const settingsManager = useSettings();
  const charactersManager = useCharacters();
  const scenesManager = useScenes();
  const diceManager = useDice();

  useEffect(() => {
    settingsManager.actions.setThemeMode(props.theme);
  }, [props.theme]);

  return (
    <DndProvider backend={HTML5Backend}>
      <SettingsContext.Provider value={settingsManager}>
        <CharactersContext.Provider value={charactersManager}>
          <ScenesContext.Provider value={scenesManager}>
            <DiceContext.Provider value={diceManager}>
              <ThemeProvider
                theme={
                  settingsManager.state.themeMode === "dark"
                    ? AppDarkTheme
                    : AppLightTheme
                }
              >
                <StylesProvider injectFirst>
                  <BrowserRouter>
                    <CssBaseline />
                    <HelmetProvider>{props.children}</HelmetProvider>
                  </BrowserRouter>
                </StylesProvider>
              </ThemeProvider>
            </DiceContext.Provider>
          </ScenesContext.Provider>
        </CharactersContext.Provider>
      </SettingsContext.Provider>
    </DndProvider>
  );
}
