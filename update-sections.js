const fs = require('fs');
const path = require('path');

const sectionsDir = 'src/components/sections';
const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add import for useIsMobile if not already there
  if (!content.includes('import { useIsMobile }')) {
    content = content.replace(
      'import { useGetCSSVariable } from "@/hooks/use-get-css-variable";',
      'import { useGetCSSVariable } from "@/hooks/use-get-css-variable";\nimport { useIsMobile } from "@/hooks/use-is-mobile";'
    );
  }
  
  // Add useIsMobile hook call after other hooks
  if (!content.includes('const isMobile = useIsMobile();')) {
    content = content.replace(
      'const [isMounted, setIsMounted] = useState(false);',
      'const [isMounted, setIsMounted] = useState(false);\n  const isMobile = useIsMobile();'
    );
  }
  
  // Update fuzzytext rendering condition to include !isMobile
  content = content.replace(/\{isMounted && \(/g, '{isMounted && !isMobile && (');
  content = content.replace(/isMounted \? "opacity-0" : "opacity-100"/g, 'isMounted && !isMobile ? "opacity-0" : "opacity-100"');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});

console.log('All files updated successfully');
