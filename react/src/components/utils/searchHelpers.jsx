export const renderResult = (title, content, keyword) => {
    const highlightedTitle = title.replace(new RegExp(`\\b${keyword}\\b`, 'gi'), match => `<span class="bg-yellow-200">${match}</span>`);
    const truncatedContent = highlightKeywordInContent(content, keyword);
  
    return (
      <div className="text-left">
        <p dangerouslySetInnerHTML={{ __html: highlightedTitle }} className="font-bold mb-2" />
        <p dangerouslySetInnerHTML={{ __html: truncatedContent }} />
      </div>
    );
  };
  
   const highlightKeywordInContent = (content, keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const match = regex.exec(content);
  
    if (match) {
      const startIndex = Math.max(0, match.index - 60);
      const endIndex = Math.min(content.length, match.index + keyword.length + 60);
  
      const highlightedContent =
        content.substring(startIndex, match.index) +
        `<span class="bg-yellow-200 font-bold">${match[0]}</span>` +
        content.substring(match.index + keyword.length, endIndex);
  
      return `${startIndex > 0 ? '...' : ''}${highlightedContent}${endIndex < content.length ? '...' : ''}`;
    }
  
    return content.substring(0, 100) + '...';
  };
