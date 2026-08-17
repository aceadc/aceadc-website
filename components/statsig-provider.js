import { StatsigProvider } from "@statsig/react-bindings";

export function StatsigProviderWrapper({ children }) {
  return (
    <StatsigProvider
      sdkKey="client-xX9VFKolAGWM8Q1x7G3m6D7EPRdSC4xwuGVUBRgAkSA"
      user={{ userID: "anonymous" }}
    >
      {children}
    </StatsigProvider>
  );
}
