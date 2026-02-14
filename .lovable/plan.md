

# Create 6 Feature Detail Pages

## Overview
Create individual pages for each of the 6 features in the "Designed for Every Need" section, with content based on the uploaded app screenshots. Each feature card will link to its dedicated page.

## New Pages (under `src/pages/features/`)

### 1. `/features/daily-health-records`
- **Title**: Daily Health Records
- **Content**: Log daily symptoms including mood (Happy, etc.), discharge levels (Decreased, etc.), and physical symptoms. Each day's record shows date-stamped entries with icons for breast pain, itching, giddiness, and headache.
- **Key points**: Date-wise health logging, mood tracking, discharge monitoring, physical symptom recording

### 2. `/features/period-tracking`
- **Title**: Period Tracking & Calendar
- **Content**: Track and record periods with a calendar view showing highlighted period days. View next period estimates with predicted start and end dates. Brief analysis of daily health profile on a regular basis.
- **Key points**: Calendar view, period day highlighting, next period estimates with start/end dates, daily health profile analysis

### 3. `/features/symptom-logging`
- **Title**: Symptom Logging
- **Content**: Select and submit symptoms from a visual grid: Abdomen Pain, Breast Pain, Nausea, Itching, Giddiness, Bloated, Headache, Sleeping Problems. Each symptom has a distinct icon.
- **Key points**: Visual symptom selection grid, submit functionality, 8 trackable symptoms

### 4. `/features/ai-recommendations`
- **Title**: AI-Powered Recommendations
- **Content**: State-of-the-art AI system generates detailed reports, analysis, and notifications so users never miss out on their periods or health updates.
- **Key points**: AI-generated reports, health analysis, timely notifications

### 5. `/features/connect-with-doctors`
- **Title**: Connect with Doctors
- **Content**: TANAYA shares detailed reports of cycles with in-house experts to get the most optimal answers to health queries.
- **Key points**: Cycle report sharing, in-house expert access, personalized answers

### 6. `/features/health-profile`
- **Title**: Health Profile & Guidance
- **Content**: Comprehensive health profile with sections for Profile, Health Profile, Guidance, Warnings, and Settings. Personalized wellness management.
- **Key points**: Profile management, health profile, guidance, warnings, settings, sharing

## Page Layout (shared across all 6 pages)
- Navbar at top (reuse existing)
- Back link to home page
- Feature icon + title as hero
- Description section with key points as soft cards
- "Explore Other Features" grid linking to sibling feature pages
- Footer (reuse existing)

## Routing Changes
- **File**: `src/App.tsx` -- add 6 new routes
- **File**: `src/components/landing/FeaturesDeepDive.tsx` -- wrap each card in a `Link` to its feature page

## Technical Details

### New files:
- `src/pages/features/DailyHealthRecords.tsx`
- `src/pages/features/PeriodTracking.tsx`
- `src/pages/features/SymptomLogging.tsx`
- `src/pages/features/AIRecommendations.tsx`
- `src/pages/features/ConnectWithDoctors.tsx`
- `src/pages/features/HealthProfile.tsx`

### Modified files:
- `src/App.tsx` -- add 6 routes under `/features/*`
- `src/components/landing/FeaturesDeepDive.tsx` -- add `Link` wrappers on feature cards

