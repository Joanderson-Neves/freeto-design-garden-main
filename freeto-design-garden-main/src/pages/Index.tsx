
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check, Copy, ExternalLink, Moon, Palette, Sun, Type, Layout, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const ColorSwatch = ({ color, name, value }: { color: string; name: string; value: string }) => {
  const { toast } = useToast();
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    toast({
      title: "Copied to clipboard",
      description: `${value} has been copied to your clipboard.`
    });
  };
  
  return (
    <div className="flex flex-col">
      <div 
        className="h-24 w-full rounded-md mb-2 flex items-end justify-end p-2 cursor-pointer group relative"
        style={{ backgroundColor: value }}
        onClick={copyToClipboard}
      >
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/10 dark:bg-white/10 rounded-md flex items-center justify-center transition-opacity">
          <Copy className="w-6 h-6 text-white drop-shadow-md" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{value}</span>
      </div>
    </div>
  );
};

const TypographyShowcase = () => {
  const { toast } = useToast();
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${text} has been copied to your clipboard.`
    });
  };
  
  return (
    <div className="space-y-8">
      <div 
        className="p-4 border rounded-md cursor-pointer group relative" 
        onClick={() => copyToClipboard('text-4xl font-bold font-display')}
      >
        <div className="text-xs text-muted-foreground mb-2">Display - 4XL Bold</div>
        <h1 className="text-4xl font-bold font-display">The quick brown fox jumps over the lazy dog</h1>
        <div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity">
          <Copy className="w-4 h-4" />
        </div>
      </div>
      
      <div 
        className="p-4 border rounded-md cursor-pointer group relative" 
        onClick={() => copyToClipboard('text-3xl font-semibold font-display')}
      >
        <div className="text-xs text-muted-foreground mb-2">Heading - 3XL Semibold</div>
        <h2 className="text-3xl font-semibold font-display">The quick brown fox jumps over the lazy dog</h2>
        <div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity">
          <Copy className="w-4 h-4" />
        </div>
      </div>
      
      <div 
        className="p-4 border rounded-md cursor-pointer group relative" 
        onClick={() => copyToClipboard('text-2xl font-medium font-display')}
      >
        <div className="text-xs text-muted-foreground mb-2">Subheading - 2XL Medium</div>
        <h3 className="text-2xl font-medium font-display">The quick brown fox jumps over the lazy dog</h3>
        <div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity">
          <Copy className="w-4 h-4" />
        </div>
      </div>
      
      <div 
        className="p-4 border rounded-md cursor-pointer group relative" 
        onClick={() => copyToClipboard('text-xl font-normal')}
      >
        <div className="text-xs text-muted-foreground mb-2">Title - XL Normal</div>
        <h4 className="text-xl font-normal">The quick brown fox jumps over the lazy dog</h4>
        <div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity">
          <Copy className="w-4 h-4" />
        </div>
      </div>
      
      <div 
        className="p-4 border rounded-md cursor-pointer group relative" 
        onClick={() => copyToClipboard('text-base')}
      >
        <div className="text-xs text-muted-foreground mb-2">Body - Base</div>
        <p className="text-base">The quick brown fox jumps over the lazy dog</p>
        <div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity">
          <Copy className="w-4 h-4" />
        </div>
      </div>
      
      <div 
        className="p-4 border rounded-md cursor-pointer group relative" 
        onClick={() => copyToClipboard('text-sm text-muted-foreground')}
      >
        <div className="text-xs text-muted-foreground mb-2">Caption - Small Muted</div>
        <p className="text-sm text-muted-foreground">The quick brown fox jumps over the lazy dog</p>
        <div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity">
          <Copy className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const ComponentsShowcase = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const showToast = () => {
    toast({
      title: "Action performed",
      description: "This is a toast notification example."
    });
  };
  
  return (
    <div className="space-y-10">
      <section>
        <h3 className="text-lg font-medium mb-4">Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" onClick={showToast}>Default Button</Button>
          <Button variant="secondary" onClick={showToast}>Secondary</Button>
          <Button variant="outline" onClick={showToast}>Outline</Button>
          <Button variant="ghost" onClick={showToast}>Ghost</Button>
          <Button variant="link" onClick={showToast}>Link</Button>
          <Button variant="destructive" onClick={showToast}>Destructive</Button>
        </div>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-4">Button Sizes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="lg" onClick={showToast}>Large</Button>
          <Button size="default" onClick={showToast}>Default</Button>
          <Button size="sm" onClick={showToast}>Small</Button>
          <Button size="icon" onClick={showToast}><ArrowRight /></Button>
        </div>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-4">Input Fields</h3>
        <div className="max-w-sm space-y-4">
          <Input 
            placeholder="Default input" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <div className="flex space-x-2">
            <Input placeholder="Email address" />
            <Button onClick={showToast}>Subscribe</Button>
          </div>
          <Input placeholder="Disabled input" disabled />
        </div>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-4">Cards</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content area of the card. You can put any content here.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" onClick={showToast}>Cancel</Button>
              <Button onClick={showToast}>Action</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Interactive Example</CardTitle>
              <CardDescription>Try out the interactive components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Enter your name" />
                <div className="flex space-x-2">
                  <Input placeholder="Enter your email" />
                  <Button size="icon"><ArrowRight /></Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={showToast}>
                Submit
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Feature Card</CardTitle>
              <CardDescription>Highlight a specific feature</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-muted rounded-md flex items-center justify-center mb-4">
                <Palette className="h-10 w-10 text-muted-foreground" />
              </div>
              <p className="text-sm">This card can be used to highlight features or services.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={showToast}>
                Learn More <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};

const LayoutShowcase = () => {
  return (
    <div className="space-y-10">
      <section>
        <h3 className="text-lg font-medium mb-4">Grid Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-muted h-32 rounded-md flex items-center justify-center">
              Grid Item {item}
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-4">Flex Layout</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-muted h-32 rounded-md flex items-center justify-center">
            Flex Item 1
          </div>
          <div className="flex-1 bg-muted h-32 rounded-md flex items-center justify-center">
            Flex Item 2
          </div>
          <div className="flex-1 bg-muted h-32 rounded-md flex items-center justify-center">
            Flex Item 3
          </div>
        </div>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-4">Responsive Layout</h3>
        <div className="p-4 border rounded-md">
          <div className="hidden sm:block md:hidden">
            <p className="text-center font-medium">Small screens (sm)</p>
          </div>
          <div className="hidden md:block lg:hidden">
            <p className="text-center font-medium">Medium screens (md)</p>
          </div>
          <div className="hidden lg:block xl:hidden">
            <p className="text-center font-medium">Large screens (lg)</p>
          </div>
          <div className="hidden xl:block">
            <p className="text-center font-medium">Extra large screens (xl)</p>
          </div>
          <div className="block sm:hidden">
            <p className="text-center font-medium">Mobile screens</p>
          </div>
          <div className="h-20 bg-muted mt-4 rounded-md flex items-center justify-center">
            <p>Resize your browser to see changes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <div className="mr-4 flex">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">F</div>
                <span className="font-display font-semibold text-xl">Freeto Design</span>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <Link to="/customize">
                <Button variant="outline" size="sm" className="gap-2">
                  <Wand2 className="h-4 w-4" />
                  Customize
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </header>

        <main className="container pb-16 pt-8">
          <div className="flex flex-col gap-4 mb-10">
            <h1 className="text-4xl font-bold font-display">Freeto Design System</h1>
            <p className="text-lg text-muted-foreground">A comprehensive design system with reusable components</p>
          </div>

          <Tabs defaultValue="components">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="components">
                <div className="flex items-center gap-2">
                  <Layout className="h-4 w-4" />
                  <span>Components</span>
                </div>
              </TabsTrigger>
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
              <TabsTrigger value="layout">
                <div className="flex items-center gap-2">
                  <Layout className="h-4 w-4" />
                  <span>Layout</span>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="components" className="p-0">
              <ComponentsShowcase />
            </TabsContent>
            
            <TabsContent value="colors" className="p-0">
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-medium mb-4">Primary Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <ColorSwatch color="primary" name="Primary" value="hsl(var(--primary))" />
                    <ColorSwatch color="secondary" name="Secondary" value="hsl(var(--secondary))" />
                    <ColorSwatch color="accent" name="Accent" value="hsl(var(--accent))" />
                    <ColorSwatch color="destructive" name="Destructive" value="hsl(var(--destructive))" />
                  </div>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-4">UI Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <ColorSwatch color="background" name="Background" value="hsl(var(--background))" />
                    <ColorSwatch color="foreground" name="Foreground" value="hsl(var(--foreground))" />
                    <ColorSwatch color="card" name="Card" value="hsl(var(--card))" />
                    <ColorSwatch color="card-foreground" name="Card Foreground" value="hsl(var(--card-foreground))" />
                    <ColorSwatch color="popover" name="Popover" value="hsl(var(--popover))" />
                    <ColorSwatch color="popover-foreground" name="Popover Foreground" value="hsl(var(--popover-foreground))" />
                    <ColorSwatch color="muted" name="Muted" value="hsl(var(--muted))" />
                    <ColorSwatch color="muted-foreground" name="Muted Foreground" value="hsl(var(--muted-foreground))" />
                  </div>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-4">Border & Control Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <ColorSwatch color="border" name="Border" value="hsl(var(--border))" />
                    <ColorSwatch color="input" name="Input" value="hsl(var(--input))" />
                    <ColorSwatch color="ring" name="Ring" value="hsl(var(--ring))" />
                  </div>
                </section>
              </div>
            </TabsContent>
            
            <TabsContent value="typography" className="p-0">
              <TypographyShowcase />
            </TabsContent>
            
            <TabsContent value="layout" className="p-0">
              <LayoutShowcase />
            </TabsContent>
          </Tabs>
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
              <a href="#" className="hover:underline">Documentation</a>
              <a href="#" className="hover:underline">Components</a>
              <a href="https://github.com/Joanderson-Neves" className="hover:underline" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
