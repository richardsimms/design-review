# Market Considerations — SEEK APAC

## Market Overview

| Market | Language(s) | Key Considerations |
|--------|-------------|-------------------|
| AU | English | Primary market, full feature set |
| NZ | English | AU-aligned, minor localisation |
| ID | Bahasa Indonesia | Right-to-left not needed, local imagery |
| TH | Thai | Thai script support, local conventions |
| HK | Traditional Chinese | Vertical text considerations, dense layouts |
| SG | English (primary) | Multicultural, diverse imagery |
| PH | English | Local conventions, mobile-first |
| MY | English, Bahasa Malaysia | Multicultural, diverse representation |

---

## Language-Specific Requirements

### English (AU, NZ, SG, PH, MY)

- Australian English spelling (colour, organisation, recognise)
- Date format: DD/MM/YYYY (not US format)
- Currency: Local symbols ($, S$, RM, ₱)
- Phone format: Local conventions

### Thai (TH)

**Typography**:
- Thai script requires larger line-height (1.6-1.8 minimum)
- No word breaks in Thai — text wraps at character level
- Mixed Thai/English content needs careful typographic treatment
- Thai numerals may be preferred in some contexts

**Layout**:
- Text often runs longer than English equivalent
- Allow for 30-40% text expansion in UI elements
- Buttons and labels need flexible widths

**Cultural**:
- Yellow associated with royalty (use carefully)
- Head/feet imagery culturally sensitive
- Buddhist calendar may be relevant (year offset)

### Bahasa Indonesia (ID) / Bahasa Malaysia (MY)

**Typography**:
- Latin script, similar to English
- Longer words — allow for text expansion
- No special character support needed beyond Latin

**Cultural**:
- Islamic considerations for some users (Halal imagery if relevant)
- Diverse ethnic representation important
- Green often associated positively

### Traditional Chinese (HK)

**Typography**:
- Characters require consistent sizing
- Line-height 1.5-1.7 recommended
- Mixed Chinese/English needs careful kerning
- Traditional characters (not Simplified)

**Layout**:
- Dense information layouts are culturally acceptable
- Vertical text possible but rarely needed in digital
- Compact UI often preferred

**Cultural**:
- Red = prosperity, luck (positive)
- White can signal mourning (context-dependent)
- Numbers: 8 lucky, 4 unlucky (avoid in IDs if possible)

---

## Design Localisation Checklist

### Typography

| Check | Details |
|-------|---------|
| Font supports target languages | Thai, Chinese character sets |
| Line-height adjusted | Thai: 1.6+, Chinese: 1.5+ |
| Text containers flexible | Allow for 30-40% expansion |
| Number formatting | Locale-appropriate separators |
| Date formatting | DD/MM/YYYY for most APAC |

### Imagery

| Check | Details |
|-------|---------|
| Diverse representation | Reflects market demographics |
| Culturally appropriate | No sensitive imagery |
| Local context | Office/work environments match market |
| Avoid stereotypes | Authentic representation |

### Colour

| Check | Details |
|-------|---------|
| Red usage | Positive in Chinese markets |
| White usage | Caution in mourning contexts |
| Green usage | Generally positive |
| Yellow usage | Royal in Thailand |
| Brand colours | Should work across markets |

### Content

| Check | Details |
|-------|---------|
| Currency symbols | Correct local symbol |
| Phone formats | Local conventions |
| Address formats | Local structure |
| Name order | Some markets use family name first |
| Honorifics | Local conventions respected |

---

## Audience-Specific Considerations

### Candidates

**All markets**:
- Job search is primary task — keep simple
- Mobile-first in SEA markets
- Salary information highly valued
- Application status critical

**SEA specifics**:
- SMS-based verification common
- WhatsApp integration valued
- Lower data plans — optimise payload
- Slower connections — progressive loading

### Hirers

**All markets**:
- Dashboard efficiency matters
- Bulk operations needed
- Reporting and analytics valued

**AU/NZ specifics**:
- Compliance requirements (Fair Work, etc.)
- Integration with local HRIS systems

**SEA specifics**:
- Different hiring volume patterns
- Local job board competition

### Recruiters

**All markets**:
- Power user features needed
- Speed and efficiency paramount
- CRM-like functionality

---

## Platform Considerations by Market

### Mobile Priority

**High mobile priority** (mobile-first design):
- Indonesia
- Thailand
- Philippines

**Balanced mobile/desktop**:
- Malaysia
- Hong Kong
- Singapore

**Desktop-strong** (but still mobile important):
- Australia
- New Zealand

### Connectivity Considerations

**High bandwidth assumed**:
- Australia
- New Zealand
- Singapore
- Hong Kong

**Variable bandwidth** (optimise for):
- Indonesia
- Thailand
- Philippines
- Malaysia (outside urban)

**Optimisation tactics**:
- Lazy load images
- Compress assets aggressively
- Progressive enhancement
- Offline-capable features where possible
- Skeleton loaders to show progress

---

## Testing Recommendations

### Before Launch

1. **Content review** with native speakers
2. **Cultural review** with local team members
3. **Device testing** on popular local devices
4. **Network testing** on 3G/variable connections
5. **Payment testing** with local payment methods if applicable

### Ongoing

1. **Analytics** segmented by market
2. **Feedback** channels in local language
3. **A/B testing** may need market-specific variants
4. **Performance monitoring** by region
