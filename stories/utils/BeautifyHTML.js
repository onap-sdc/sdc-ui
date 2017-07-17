export default function BeautifyHTML(html) {
	html = html.replace(/\s{2,}/g, ' ');

	let result = '', indentCount = 0, parsingText = false;
	for (let i=0; i<html.length; i++) {

		let startOfTag, endOfTag, closingTag, upcomingTag, afterTag, numTabs;
		if (html[i] == '<') { startOfTag = true; }
		else if (html[i] == '>') { endOfTag = true; }
		else if (html[i-1] == '>') { afterTag = true; }
		if (html[i+1] == '/') { closingTag = true; }
		else if (html[i+1] == '<') { upcomingTag = true; }

		if (startOfTag) {
				if (closingTag) { numTabs = --indentCount; }
				else { numTabs = indentCount++; }
		}

		if (parsingText && afterTag) {
			numTabs = indentCount;
		}

		result += '  '.repeat(numTabs) + html[i];

		if (endOfTag || parsingText && upcomingTag) {
			result += '\n';
			parsingText = false;
			if (!upcomingTag) { parsingText = true; }
		}
	}

	return result;
}
