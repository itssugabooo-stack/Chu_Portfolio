"""Export the editable Word CV to a selectable-text, linked PDF.

Requires: python -m pip install python-docx "reportlab<4.4"
Run from any directory: python scripts/export-cv.py
"""
from pathlib import Path
from html import escape
from docx import Document
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4

ROOT = Path(__file__).resolve().parents[1]
source = Document(ROOT / 'cv-source/Chu_Theint_Theint_CV.docx')
styles = {
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9, leading=12, spaceAfter=4),
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=21, leading=25, spaceAfter=4),
    'heading': ParagraphStyle('heading', fontName='Helvetica-Bold', fontSize=10, leading=14, spaceBefore=8, spaceAfter=4, textColor=HexColor('#17665f'), keepWithNext=True),
    'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=9, leading=12, spaceAfter=3, keepWithNext=True),
}
story = []
for i, p in enumerate(source.paragraphs):
    if not p.text.strip():
        continue
    text = escape(p.text)
    if i == 2:
        text = '+66 98 195 7523 | <link href="mailto:its.sugabooo@gmail.com">its.sugabooo@gmail.com</link>'
    elif i == 3:
        text = '<link href="https://www.linkedin.com/in/chu-theint-theint-890081394/">LinkedIn</link> | <link href="https://github.com/itssugabooo-stack">GitHub: itssugabooo-stack</link> | <link href="https://chu-portfolio-five.vercel.app">Portfolio</link>'
    kind = 'name' if i == 0 else 'heading' if p.text.isupper() else 'title' if p.style.name.startswith('Heading') else 'body'
    if p.style.name == 'List Bullet':
        text = '&#8226; ' + text
    story.append(Paragraph(text, styles[kind]))
SimpleDocTemplate(str(ROOT / 'public/cv.pdf'), pagesize=A4, rightMargin=38, leftMargin=38,
                  topMargin=30, bottomMargin=30, title='Chu Theint Theint - CV', author='Chu Theint Theint').build(story)
print('Exported public/cv.pdf from cv-source/Chu_Theint_Theint_CV.docx')
