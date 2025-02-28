
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Palette, Type, Layout, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Predefined color palettes
const colorPalettes = [
  {
    name: "Default Purple",
    primary: "262 83% 74%",
    secondary: "240 5.9% 10%",
    accent: "240 4.8% 95.9%",
    background: "0 0% 100%",
    foreground: "240 10% 3.9%",
  },
  {
    name: "Ocean Blue",
    primary: "201 96% 32%",
    secondary: "200 98% 39%",
    accent: "199 89% 48%",
    background: "0 0% 100%",
    foreground: "224 71% 4%",
  },
  {
    name: "Forest Green",
    primary: "142 76% 36%",
    secondary: "143 64% 24%",
    accent: "120 100% 93%",
    background: "0 0% 100%",
    foreground: "120 100% 9%",
  },
  {
    name: "Sunset Orange",
    primary: "12 83% 55%",
    secondary: "22 100% 51%",
    accent: "35 100% 91%",
    background: "0 0% 100%",
    foreground: "24 9% 10%",
  },
  {
    name: "Dark Mode",
    primary: "262 83% 74%",
    secondary: "240 3.7% 15.9%",
    accent: "240 3.7% 15.9%",
    background: "240 10% 3.9%",
    foreground: "0 0% 98%",
  },
];

// Predefined font pairings
const fontPairings = [
  {
    name: "Default",
    display: "SF Pro Display, Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  {
    name: "Classic",
    display: "Georgia, serif",
    body: "Arial, sans-serif",
  },
  {
    name: "Modern",
    display: "Montserrat, sans-serif",
    body: "Open Sans, sans-serif",
  },
  {
    name: "Elegant",
    display: "Playfair Display, serif",
    body: "Lato, sans-serif",
  },
  {
    name: "Technical",
    display: "Roboto Mono, monospace",
    body: "Roboto, sans-serif",
  },
];

// Layout suggestions based on color palette and typography
const suggestLayouts = (colorPalette: any, fontPairing: any) => {
  // Simple algorithm to suggest layouts based on color palette and typography
  const layouts = [
    {
      name: "Minimalist",
      description: "Clean, spacious layout with focus on content",
      suitable: true,
      preview: "grid grid-cols-1 gap-8 max-w-4xl mx-auto",
    },
    {
      name: "Magazine",
      description: "Multi-column layout with varied content blocks",
      suitable: fontPairing.name === "Elegant" || fontPairing.name === "Classic",
      preview: "grid grid-cols-12 gap-4",
    },
    {
      name: "Dashboard",
      description: "Data-focused layout with cards and widgets",
      suitable: fontPairing.name === "Technical" || fontPairing.name === "Modern",
      preview: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    },
    {
      name: "Portfolio",
      description: "Showcase-style layout with large visuals",
      suitable: colorPalette.name === "Ocean Blue" || colorPalette.name === "Sunset Orange",
      preview: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
    },
    {
      name: "Blog",
      description: "Content-first layout optimized for reading",
      suitable: true,
      preview: "max-w-3xl mx-auto space-y-8",
    },
  ];

  // Return all layouts but mark suitable ones
  return layouts;
};

export const ThemeCustomizer = ({ 
  activeTheme, 
  setActiveTheme, 
  activeFontPairing, 
  setActiveFontPairing,
  applyTheme
}: { 
  activeTheme: any;
  setActiveTheme: (theme: any) => void;
  activeFontPairing: any;
  setActiveFontPairing: (fonts: any) => void;
  applyTheme: () => void;
}) => {
  const { toast } = useToast();
  const [customPrimary, setCustomPrimary] = useState(activeTheme.primary);
  const [suggestedLayouts, setSuggestedLayouts] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("colors");

  useEffect(() => {
    // Update suggested layouts when theme or fonts change
    const layouts = suggestLayouts(activeTheme, activeFontPairing);
    setSuggestedLayouts(layouts);
  }, [activeTheme, activeFontPairing]);

  const handleColorPaletteSelect = (palette: any) => {
    setActiveTheme(palette);
    toast({
      title: "Color palette updated",
      description: `'${palette.name}' palette applied to design system.`
    });
  };

  const handleFontPairingSelect = (pairing: any) => {
    setActiveFontPairing(pairing);
    toast({
      title: "Typography updated",
      description: `'${pairing.name}' font pairing applied to design system.`
    });
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomPrimary(e.target.value);
  };

  const applyCustomColor = () => {
    setActiveTheme({
      ...activeTheme,
      name: "Custom",
      primary: customPrimary
    });
    toast({
      title: "Custom color applied",
      description: "Your custom primary color has been applied."
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5" />
          Theme Customizer
        </CardTitle>
        <CardDescription>
          Customize colors, typography, and get layout suggestions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="colors">
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span>Colors</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="typography">
              <div className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                <span>Typography</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="layouts">
              <div className="flex items-center gap-2">
                <Layout className="h-4 w-4" />
                <span>Layout Suggestions</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Predefined Color Palettes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {colorPalettes.map((palette, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:border-primary/50 transition-colors ${
                      activeTheme.name === palette.name ? "border-primary ring-1 ring-primary" : ""
                    }`}
                    onClick={() => handleColorPaletteSelect(palette)}
                  >
                    <div className="flex flex-1 items-center gap-3">
                      <div 
                        className="h-10 w-10 rounded-full border"
                        style={{ backgroundColor: `hsl(${palette.primary})` }}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{palette.name}</p>
                      </div>
                    </div>
                    {activeTheme.name === palette.name && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-medium">Custom Primary Color</h3>
                <div className="flex gap-3 items-center">
                  <div 
                    className="h-10 w-10 rounded-full border"
                    style={{ backgroundColor: `hsl(${customPrimary})` }}
                  />
                  <div className="flex-1">
                    <Input 
                      value={customPrimary} 
                      onChange={handleCustomColorChange} 
                      placeholder="e.g. 262 83% 74%" 
                    />
                    <p className="text-xs text-muted-foreground mt-1">Format: hue saturation% lightness%</p>
                  </div>
                  <Button size="sm" onClick={applyCustomColor}>Apply</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Font Pairings</h3>
              <div className="grid grid-cols-1 gap-4">
                {fontPairings.map((pairing, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:border-primary/50 transition-colors ${
                      activeFontPairing.name === pairing.name ? "border-primary ring-1 ring-primary" : ""
                    }`}
                    onClick={() => handleFontPairingSelect(pairing)}
                  >
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">{pairing.name}</p>
                        {activeFontPairing.name === pairing.name && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="mt-2 space-y-2">
                        <p 
                          className="text-lg" 
                          style={{ fontFamily: pairing.display }}
                        >
                          Display Font
                        </p>
                        <p 
                          className="text-sm text-muted-foreground" 
                          style={{ fontFamily: pairing.body }}
                        >
                          Body Font - The quick brown fox jumps over the lazy dog
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="layouts" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Suggested Layouts</h3>
              <p className="text-sm text-muted-foreground">
                Based on your selected color palette and typography, here are some layout suggestions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedLayouts.map((layout, index) => (
                  <div
                    key={index}
                    className={`border rounded-md p-3 ${
                      layout.suitable ? "border-primary/30 bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium">{layout.name}</p>
                      {layout.suitable && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{layout.description}</p>
                    <div className="h-20 border rounded bg-muted/50 flex items-center justify-center">
                      <code className="text-xs">{layout.preview}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={applyTheme}>
          Apply Theme Changes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThemeCustomizer;
