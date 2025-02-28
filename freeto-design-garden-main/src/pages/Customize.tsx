
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import { useTheme } from "@/context/ThemeContext";

const Customize = () => {
  const { theme, setTheme, fontPairing, setFontPairing, applyTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">F</div>
              <span className="font-display font-semibold text-xl">Freeto Design</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Design System
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container pb-16 pt-8">
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-4xl font-bold font-display">Customize Freeto Design</h1>
          <p className="text-lg text-muted-foreground">Modify colors, typography, and get layout suggestions</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ThemeCustomizer 
            activeTheme={theme}
            setActiveTheme={setTheme}
            activeFontPairing={fontPairing}
            setActiveFontPairing={setFontPairing}
            applyTheme={applyTheme}
          />
        </div>
      </main>
      
      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Freeto Design. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with 🖤 and 🧠 by Joanderson
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:underline">Documentation</Link>
            <Link to="/" className="hover:underline">Components</Link>
            <a href="https://github.com/Joanderson-Neves" className="hover:underline" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Customize;
