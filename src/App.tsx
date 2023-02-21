import { useTernaryDarkMode } from "usehooks-ts";

function App() {
  //#region Dark Mode
  const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
    useTernaryDarkMode();
  type TernaryDarkMode = typeof ternaryDarkMode;

  const htmlRoot = document.documentElement;
  htmlRoot.classList.toggle("dark", isDarkMode);

  //#endregion

  return (
    <div className="grid h-full place-items-center">
      <select
        name="select-ternaryDarkMode"
        title="Select Dark Mode"
        onChange={(e) => setTernaryDarkMode(e.target.value as TernaryDarkMode)}
        value={ternaryDarkMode}
        className="absolute top-5 right-10 dark:bg-neutral-800 rounded-md py-1 px-2"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
