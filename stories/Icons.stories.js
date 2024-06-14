// icons.stories.js

export default {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'range', min: 10, max: 100, step: 1 }
  },
  parameters: {
    layout: 'centered',
  },
};


const IconsTemplate = ({ color, size, icons }) => {
  const container = document.createElement('div');
  container.classList.add('icon-container');

  icons.forEach(icon => {
    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('icon-wrapper');
    iconWrapper.style.width = `${size}px`;    iconWrapper.style.fill = `${color}`;

    const img = document.createElement('img');
    img.src = `stories/assets/icons/${icon.filename}`;
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.fill = `${color}`;
    
    const nameLabel = document.createElement('div');
    nameLabel.textContent = icon.name;
    nameLabel.style.marginTop = '8px';  // Space between the icon and its label


    // Adding the download link
    const downloadLink = document.createElement('a');
    downloadLink.href = `stories/assets/icons/${icon.filename}`;
    downloadLink.download = icon.filename;  // This attribute suggests that clicking the link will download the file
    downloadLink.textContent = 'Download';
    downloadLink.style.marginTop = '1rem';
    downloadLink.style.color = color;  // Optionally style the link with the icon color
    
    iconWrapper.appendChild(img);
    iconWrapper.appendChild(nameLabel);
    iconWrapper.appendChild(downloadLink);
    container.appendChild(iconWrapper);
  });

  return container;
};

export const Browsers = IconsTemplate.bind({});
Browsers.args = {
  size: 48,
  icons: [
    { name: 'Chrome Browser', filename: 'browser-chrome.svg' },
    { name: 'Edge Browser', filename: 'browser-edge.svg' },
    { name: 'Firefox Browser', filename: 'browser-firefox.svg' },
    { name: 'Safari Browser', filename: 'browser-safari.svg' },
  ]
};

export const SocialMedia = IconsTemplate.bind({})
SocialMedia.args = {
  size: 48,
  icons: [
    { name: 'Youtube', filename: 'youtube.svg' },
    { name: 'Alexa', filename: 'alexa.svg' },
    { name: 'Behance', filename: 'behance.svg' },
    { name: 'Discord', filename: 'discord.svg' },
    { name: 'Dribbble', filename: 'dribbble.svg' },
    { name: 'Facebook', filename: 'facebook.svg' },
    { name: 'Wikipedia', filename: 'wikipedia.svg' },
    { name: 'Github', filename: 'github.svg' },
    { name: 'Gitlab', filename: 'gitlab.svg' },
    { name: 'Google', filename: 'google.svg' },
    { name: 'Instagram', filename: 'instagram.svg' },
    { name: 'Line', filename: 'line.svg' },
    { name: 'LinkedIn', filename: 'linkedin.svg' },
    { name: 'Mastodon', filename: 'mastodon.svg' },
    { name: 'Medium', filename: 'medium.svg' },
    { name: 'Messenger', filename: 'messenger.svg' },
    { name: 'Microsoft Teams', filename: 'microsoft-teams.svg' },
    { name: 'Open Collective', filename: 'opencollective.svg' },
    { name: 'Paypal', filename: 'paypal.svg' },
    { name: 'Pinterest', filename: 'pinterest.svg' },
    { name: 'Quora', filename: 'quora.svg' },
    { name: 'Reddit', filename: 'reddit.svg' },
    { name: 'Signal', filename: 'signal.svg' },
    { name: 'Sina-Weibo', filename: 'sina-weibo.svg' },
    { name: 'Skype', filename: 'skype.svg' },
    { name: 'Slack', filename: 'slack.svg' },
    { name: 'Snapchat', filename: 'snapchat.svg' },
    { name: 'Sourceforge', filename: 'sourceforge.svg' },
    { name: 'Spotify', filename: 'spotify.svg' },
    { name: 'Stack Overflow', filename: 'stack-overflow.svg' },
    { name: 'Strava', filename: 'strava.svg' },
    { name: 'Substack', filename: 'substack.svg' },
    { name: 'Telegram', filename: 'telegram.svg' },
    { name: 'Tencent QQ', filename: 'tencent-qq.svg' },
    { name: 'Threads', filename: 'threads.svg' },
    { name: 'Threads', filename: 'threads-fill.svg' },
    { name: 'TikTok', filename: 'tiktok.svg' },
    { name: 'Twitch', filename: 'twitch.svg' },
    { name: 'Twitter', filename: 'twitter.svg' },
    { name: 'Twitter X', filename: 'twitter-x.svg' },
    { name: 'Vimeo', filename: 'vimeo.svg' },
    { name: 'Wechat', filename: 'wechat.svg' },
    { name: 'Whatsapp', filename: 'whatsapp.svg' },
    { name: 'Wordpress', filename: 'wordpress.svg' },
    { name: 'Yelp', filename: 'yelp.svg' },
  ]
};

export const FileTypeIcons = IconsTemplate.bind({});
FileTypeIcons.args = {
  size: 48,
  icons: [
    { name: 'AAC Audio', filename: 'filetype-aac.svg' },
    { name: 'Adobe Illustrator', filename: 'filetype-ai.svg' },
    { name: 'BMP', filename: 'filetype-bmp.svg' },
    { name: 'C#', filename: 'filetype-cs.svg' },
    { name: 'CSS', filename: 'filetype-css.svg' },
    { name: 'CSV', filename: 'filetype-csv.svg' },
    { name: 'DOC', filename: 'filetype-doc.svg' },
    { name: 'DOCX', filename: 'filetype-docx.svg' },
    { name: 'EXE', filename: 'filetype-exe.svg' },
    { name: 'GIF', filename: 'filetype-gif.svg' },
    { name: 'HEIC', filename: 'filetype-heic.svg' },
    { name: 'HTML', filename: 'filetype-html.svg' },
    { name: 'Java', filename: 'filetype-java.svg' },
    { name: 'JPG', filename: 'filetype-jpg.svg' },
    { name: 'Javascript', filename: 'filetype-js.svg' },
    { name: 'JSON', filename: 'filetype-json.svg' },
    { name: 'JSK', filename: 'filetype-jsx.svg' },
    { name: 'Key', filename: 'filetype-key.svg' },
    { name: 'M4P', filename: 'filetype-m4p.svg' },
    { name: 'Markdown', filename: 'filetype-md.svg' },
    { name: 'MDX', filename: 'filetype-mdx.svg' },
    { name: 'MOV', filename: 'filetype-mov.svg' },
    { name: 'MP3', filename: 'filetype-mp3.svg' },
    { name: 'MP4', filename: 'filetype-mp4.svg' },
    { name: 'OpenType Font', filename: 'filetype-otf.svg' },
    { name: 'PDF', filename: 'filetype-pdf.svg' },
    { name: 'PHP', filename: 'filetype-php.svg' },
    { name: 'PNG', filename: 'filetype-png.svg' },
    { name: 'PPT', filename: 'filetype-ppt.svg' },
    { name: 'PPTX', filename: 'filetype-pptx.svg' },
    { name: 'PSD (Photoshop)', filename: 'filetype-psd.svg' },
    { name: 'PY', filename: 'filetype-py.svg' },
    { name: 'RAW Image Format', filename: 'filetype-raw.svg' },
    { name: 'RB (Ruby)', filename: 'filetype-rb.svg' },
    { name: 'SASS', filename: 'filetype-sass.svg' },
    { name: 'SCSS', filename: 'filetype-scss.svg' },
    { name: 'SH (shell)', filename: 'filetype-sh.svg' },
    { name: 'SQL', filename: 'filetype-sql.svg' },
    { name: 'SVG', filename: 'filetype-svg.svg' },
    { name: 'TIFF image', filename: 'filetype-tiff.svg' },
    { name: 'TSX', filename: 'filetype-tsx.svg' },
    { name: 'TTF', filename: 'filetype-ttf.svg' },
    { name: 'TXT', filename: 'filetype-txt.svg' },
    { name: 'WAV', filename: 'filetype-wav.svg' },
    { name: 'WOFF', filename: 'filetype-woff.svg' },
    { name: 'XSL', filename: 'filetype-xls.svg' },
    { name: 'XSLX', filename: 'filetype-xlsx.svg' },
    { name: 'XML', filename: 'filetype-xml.svg' },
    { name: 'YAML', filename: 'filetype-yml.svg' },    
  ]
}

export const CardIcons = IconsTemplate.bind({});
CardIcons.args = {
  size: 48,
  icons: [
    { name: 'Card Checklist', filename: 'card-checklist.svg' },
    { name: 'Card Heading', filename: 'card-heading.svg' },
    { name: 'Card Image', filename: 'card-image.svg' },
    { name: 'Card List', filename: 'card-list.svg' },
    { name: 'Card Text', filename: 'card-text.svg' },

  ]
}

export const EarmarkedFiles = IconsTemplate.bind({});
EarmarkedFiles.args = {
  size: 48,
  icons: [
    { name: 'Earmarked File', filename: 'file-earmark.svg' },
    { name: 'Earmarked Arrow Down', filename: 'file-earmark-arrow-down.svg' },
    { name: 'Earmarked Arrow Down Fill', filename: 'file-earmark-arrow-down-fill.svg' },
    { name: 'Earmarked Arrow Up', filename: 'file-earmark-arrow-up.svg' },
    { name: 'Earmarked Arrow Up Fill', filename: 'file-earmark-arrow-up-fill.svg' },
    { name: 'Earmarked Bar Graph', filename: 'file-earmark-bar-graph.svg' },
    { name: 'Earmarked Bar Graph Fill', filename: 'file-earmark-bar-graph-fill.svg' },
    { name: 'Earmarked Binary', filename: 'file-earmark-binary.svg' },
    { name: 'Earmarked Binary Fill', filename: 'file-earmark-binary-fill.svg' },
    { name: 'Earmarked Break', filename: 'file-earmark-break.svg' },
    { name: 'Earmarked Break Fill', filename: 'file-earmark-break-fill.svg' },
    { name: 'Earmarked Check', filename: 'file-earmark-check.svg' },
    { name: 'Earmarked Check Fill', filename: 'file-earmark-check-fill.svg' },
    { name: 'Earmarked Code', filename: 'file-earmark-code.svg' },
    { name: 'Earmarked Code Fill', filename: 'file-earmark-code-fill.svg' },
    { name: 'Earmarked Diff', filename: 'file-earmark-diff.svg' },
    { name: 'Earmarked Diff Fill', filename: 'file-earmark-diff-fill.svg' },
    { name: 'Earmarked Easel', filename: 'file-earmark-easel.svg' },
    { name: 'Earmarked Easel Fill', filename: 'file-earmark-easel-fill.svg' },
    { name: 'Earmarked Excel', filename: 'file-earmark-excel.svg' },
    { name: 'Earmarked Excel Fill', filename: 'file-earmark-excel-fill.svg' },
    { name: 'Earmarked Fill', filename: 'file-earmark-fill.svg' },
    { name: 'Earmarked Font', filename: 'file-earmark-font.svg' },
    { name: 'Earmarked Font Fill', filename: 'file-earmark-font-fill.svg' },
    { name: 'Earmarked Image', filename: 'file-earmark-image.svg' },
    { name: 'Earmarked Image Fill', filename: 'file-earmark-image-fill.svg' },
    { name: 'Earmarked Lock', filename: 'file-earmark-lock.svg' },
    { name: 'Earmarked Lock Fill', filename: 'file-earmark-lock-fill.svg' },
    { name: 'Earmarked Lock 2', filename: 'file-earmark-lock2.svg' },
    { name: 'Earmarked Lock 2 Fill', filename: 'file-earmark-lock2-fill.svg' },
    { name: 'Earmarked Medical', filename: 'file-earmark-medical.svg' },
    { name: 'Earmarked Medical Fill', filename: 'file-earmark-medical-fill.svg' },
    { name: 'Earmarked Minus', filename: 'file-earmark-minus.svg' },
    { name: 'Earmarked Minus Fill', filename: 'file-earmark-minus-fill.svg' },
    { name: 'Earmarked Music', filename: 'file-earmark-music.svg' },
    { name: 'Earmarked Music Fill', filename: 'file-earmark-music-fill.svg' },
    { name: 'Earmarked PDF', filename: 'file-earmark-pdf.svg' },
    { name: 'Earmarked PDF Fill', filename: 'file-earmark-pdf-fill.svg' },
    { name: 'Earmarked Person', filename: 'file-earmark-person.svg' },
    { name: 'Earmarked Person Fill', filename: 'file-earmark-person-fill.svg' },
    { name: 'Earmarked Play', filename: 'file-earmark-play.svg' },
    { name: 'Earmarked Play Fill', filename: 'file-earmark-play-fill.svg' },
    { name: 'Earmarked Plus', filename: 'file-earmark-plus.svg' },
    { name: 'Earmarked Plus Fill', filename: 'file-earmark-plus-fill.svg' },
    { name: 'Earmarked Post', filename: 'file-earmark-post.svg' },
    { name: 'Earmarked Post Fill', filename: 'file-earmark-post-fill.svg' },
    { name: 'Earmarked PPT', filename: 'file-earmark-ppt.svg' },
    { name: 'Earmarked PPT Fill', filename: 'file-earmark-ppt-fill.svg' },
    { name: 'Earmarked RTF', filename: 'file-earmark-richtext.svg' },
    { name: 'Earmarked RTF Fill', filename: 'file-earmark-richtext-fill.svg' },
    { name: 'Earmarked Ruled', filename: 'file-earmark-ruled.svg' },
    { name: 'Earmarked Ruled Fill', filename: 'file-earmark-ruled-fill.svg' },
    { name: 'Earmarked Slides', filename: 'file-earmark-slides.svg' },
    { name: 'Earmarked Slides Fill', filename: 'file-earmark-slides-fill.svg' },
    { name: 'Earmarked Spreadsheet', filename: 'file-earmark-spreadsheet.svg' },
    { name: 'Earmarked Spreadsheet Fill', filename: 'file-earmark-spreadsheet-fill.svg' },
    { name: 'Earmarked Text', filename: 'file-earmark-text.svg' },
    { name: 'Earmarked Text', filename: 'file-earmark-text-fill.svg' },
    { name: 'Earmarked Word', filename: 'file-earmark-word.svg' },
    { name: 'Earmarked Word Fill', filename: 'file-earmark-word-fill.svg' },
    { name: 'Earmarked X', filename: 'file-earmark-x.svg' },
    { name: 'Earmarked X Fill', filename: 'file-earmark-x-fill.svg' },
    { name: 'Earmarked ZIP', filename: 'file-earmark-zip.svg' },
    { name: 'Earmarked ZIP Fill', filename: 'file-earmark-zip-fill.svg' },   
  ]
}

export const Files = IconsTemplate.bind({});
Files.args = {
  size: 48,
  icons: [
    { name: 'Archive', filename: 'archive.svg' },,
    { name: 'Archive Fill', filename: 'archive-fill.svg' },
    { name: 'File', filename: 'file.svg' },
    { name: 'File Arrow Down', filename: 'file-arrow-down.svg' },
    { name: 'File Arrow Down Fill', filename: 'file-arrow-down-fill.svg' },
    { name: 'File Arrow Up', filename: 'file-arrow-up.svg' },
    { name: 'File Arrow Up Fill', filename: 'file-arrow-up-fill.svg' },
    { name: 'File Bar Graph', filename: 'file-bar-graph.svg' },
    { name: 'File Bar Graph Fill', filename: 'file-bar-graph-fill.svg' },
    { name: 'File Binary', filename: 'file-binary.svg' },
    { name: 'File Binary Fill', filename: 'file-binary-fill.svg' },
    { name: 'File Break', filename: 'file-break.svg' },
    { name: 'File Break Fill', filename: 'file-break-fill.svg' },
    { name: 'File Check', filename: 'file-check.svg' },
    { name: 'File Check Fill', filename: 'file-check-fill.svg' },
    { name: 'File Code', filename: 'file-code.svg' },
    { name: 'File Code Fill', filename: 'file-code-fill.svg' },
    { name: 'File Diff', filename: 'file-diff.svg' },
    { name: 'File Diff Fill', filename: 'file-diff-fill.svg' },
    { name: 'File Easel', filename: 'file-easel.svg' },
    { name: 'File Easel Fill', filename: 'file-easel-fill.svg' },
    { name: 'File Excel', filename: 'file-excel.svg' },
    { name: 'File Excel Fill', filename: 'file-excel-fill.svg' },
    { name: 'File Fill', filename: 'file-fill.svg' },
    { name: 'File Font', filename: 'file-font.svg' },
    { name: 'File Font Fill', filename: 'file-font-fill.svg' },
    { name: 'File Image', filename: 'file-image.svg' },
    { name: 'File Image Fill', filename: 'file-image-fill.svg' },
    { name: 'File Lock', filename: 'file-lock.svg' },
    { name: 'File Lock Fill', filename: 'file-lock-fill.svg' },
    { name: 'File Lock v2', filename: 'file-lock2.svg' },
    { name: 'File Lock Fill v2', filename: 'file-lock2-fill.svg' },
    { name: 'File Medical', filename: 'file-medical.svg' },
    { name: 'File Medical Fill', filename: 'file-medical-fill.svg' },
    { name: 'File Minus', filename: 'file-minus.svg' },
    { name: 'File Minus Fill', filename: 'file-minus-fill.svg' },
    { name: 'File Music', filename: 'file-music.svg' },
    { name: 'File Music Fill', filename: 'file-music-fill.svg' },
    { name: 'File PDF', filename: 'file-pdf.svg' },
    { name: 'File PDF Fill', filename: 'file-pdf-fill.svg' },
    { name: 'File Person', filename: 'file-person.svg' },
    { name: 'File Person Fill', filename: 'file-person-fill.svg' },
    { name: 'File Play', filename: 'file-play.svg' },
    { name: 'File Play Fill', filename: 'file-play-fill.svg' },
    { name: 'File Plus', filename: 'file-plus.svg'}, 
    { name: 'File Plus Fill', filename: 'file-plus-fill.svg' },
    { name: 'File Post', filename: 'file-post.svg' },
    { name: 'File Post Fill', filename: 'file-post-fill.svg' },
    { name: 'File PPT', filename: 'file-ppt.svg' },
    { name: 'File PPT Fill', filename: 'file-ppt-fill.svg' },
    { name: 'File Richtext', filename: 'file-richtext.svg' },
    { name: 'File Richtext Fill', filename: 'file-richtext-fill.svg' },
    { name: 'File Ruled', filename: 'file-ruled.svg' },
    { name: 'File Ruled Fill', filename: 'file-ruled-fill.svg' },
    { name: 'File Slides', filename: 'file-slides.svg' },
    { name: 'File Slides Fill', filename: 'file-slides-fill.svg' },
    { name: 'File Spreadsheet', filename: 'file-spreadsheet.svg' },
    { name: 'File Spreadsheet Fill', filename: 'file-spreadsheet-fill.svg' },
    { name: 'File Text', filename: 'file-text.svg' },
    { name: 'File Text Fill', filename: 'file-text-fill.svg' },
    { name: 'File Word', filename: 'file-word.svg' },
    { name: 'File Word Fill', filename: 'file-word-fill.svg' },
    { name: 'File X', filename: 'file-x.svg' },
    { name: 'File X Fill', filename: 'file-x-fill.svg' },
    { name: 'File Zip', filename: 'file-zip.svg' },
    { name: 'File Zip Fill', filename: 'file-zip-fill.svg' },
    { name: 'Files', filename: 'files.svg' },
    { name: 'Files Alt', filename: 'files-alt.svg' },
  ]
}