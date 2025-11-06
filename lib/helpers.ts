export function calculateReadingTime(content: string): number {
  try {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  } catch (error) {
    console.error("Error calculating reading time:", error);
    return 1;
  }
}

export function formatDate(date: string | Date): string {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Unknown date";
  }
}
