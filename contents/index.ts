import { Language } from "@/types/Language";
import baseContent from "./_base";
import { AppContent } from "./AppContent";
import englishContent from "./english";
import hindiContent from "./hindi";

interface AppContentResolverContext {
    language: Language;
}

export default ({language}: AppContentResolverContext): AppContent => {
    switch(language){
        case Language.ENGLISH:
            return englishContent;
        case Language.HINDI:
            return hindiContent;
        default:
            return baseContent;
    }
}
  