import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <UserContext.Provider value={{ darkMode, setDarkMode, scrollToSection }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
