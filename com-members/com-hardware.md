---
title: COM Hardware
parent: For COM Team Members
nav_fold: false
layout: default
lang: en
---

# COM Hardware
{: .no_toc }

time to complete: 7 mins
{: .label}


<details markdown="block">
<summary>Table of Contents</summary>

- Table of Contents
{:toc}

</details>

# 📡 Communications (COMM) Subsystem Guide

This page covers key practices, materials, configurations, and frequently asked questions related to the COMM subsystem of the BIRDS satellite project.

---

## 🔑 Uplink Detection Codes

> **Q: Can multiple uplink detection codes be set? How are they controlled or differentiated?**
> **Tag**: Uplink

Yes, it is technically possible to set multiple uplink detection codes. However, the current BIRDS configuration uses a single uplink detection code, and this has proven sufficient for its mission requirements.

---

## 📡 Antenna Design & Assembly

### 1. **Antenna Connection Materials**

* **Wire Type**: Leads from DIP resistors
* **Surface Preparation**: Sanded with sandpaper
* **Connection Method**:

  * Lead wrapped 1.5 times clockwise around a bolt (2 mm gap), then tightened
  * Example PhotoMOS for nichrome wire heating: **AQZ102** (DIP part with bent leads for SMD mounting)
  * [AQZ102 on Digikey](https://www.digikey.com/en/products/detail/panasonic-electric-works/AQZ102/)

### 2. **Antenna Fixture (White POM Resin)**

* Designed and processed locally (e.g., Kyushu University workshop)
* Alternatively, use general-purpose metal manufacturing companies

### 3. **Antenna Wire and Hole Drilling**

* **Vendor**: Osaka Heat Treatment Co., Ltd. (material only, not hole processing)
* **Recommendation**: Use external companies for hole drilling due to breakage risks
* **Nichrome Coil**: Can be handmade in the lab (no need to outsource)

---

## 🛰️ Antenna Type and Cable Management

### 4. **Antenna Types**

* Typically **monopole** or **dipole**
* Operate in **UHF/VHF bands**
* Refer to the subsystem’s **design document** for exact specifications

### 5. **Coaxial Cable Length**

* BIRDS used **180 mm** cables; excess cable was tucked between the antenna board and RAB

### 6. **Cable Routing and Fixation**

* **Route**: From COMM board (UHF TRX) top side (+Z) to the antenna board
* **Fixation**:

  * Use tape to suppress vibration
  * During FM assembly: SMA connector torqued to **56 N·cm**, a small amount of **Araldite epoxy** applied (avoid threading area)

---

## 🔧 Drilling Thin Elements

### 7. **Fixing and Drilling Methods**

* Use **scribing** for positioning
* Drill with wood backing; scrape rather than pierce
* Drill press must be in good condition (check bit quality)
* For batch drilling, use metal scrap fixtures with upper templates

---

## 📶 Amateur Band Considerations and Uplink Security

### 8. **Frequency Use & Encryption**

* **Regulation**: Both **uplink and downlink** must benefit the amateur community
* **Kyutech Policy**:

  * Uplink commands are **not encrypted** (encryption not permitted in amateur service)
  * **Pseudo-encryption**: Actual frequencies hidden (e.g., “430.XXX \[MHz]”)
  * Uplink frequencies removed or masked in internal/public presentations

> ✅ As per UNISEC’s coordination guide, pseudo-encryption of uplinks is acceptable if command content is not publicly disclosed.

---

## 📊 Link Budget Calculation

### 9. **Excel Tool Usage**

* **Input Frequency**: Row 3
* **Receiver Sensitivity**: Row 31 (based on COMM board test data)
* Reference File: `119_120_121_BIRDS-5 LinkMargin.xlsx`

### 10. **Adding a Preamp (31 dB)**

* Added in **Row 28 (Downlink Summary)** as `Preamp[dB]`
* Adjusted signal power at LNA input by including preamp gain

> ⚠️ Preamp amplifies signal and **noise**; does **not increase link margin** by the full gain value.

### 11. **Accounting for Noise**

* **LNA Role**: Placed close to the antenna to reduce **cable loss** and **system noise**
* **Adjustments**:

  * Row 29: Cable Loss
  * Row 30: Input Noise Temperature (Kelvin)

### 12. **Noise Temperature Calculation**

* **Noise Figure (NF)** to **Temperature**:

  * NF = 0.2 dB → \~14 K
  * Use [Noise Temp Calculator](https://www.pasternack.jp/t-calculatornoisefigure)
  * Reference Temp: 290–300 K (room temperature)

> Galactic noise in some directions can reach **\~200 K**. Use [this source](https://www.jstage.jst.go.jp/article/nictkenkyuhoukoku/6/22/6_23/_pdf) for reference.

---

## 🧮 Formulae & Notes (For Reference)

* **Noise Temperature (T)** from NF:

$$
T = 290 \cdot \left(10^{\frac{NF}{10}} - 1\right)
$$


* **Effective Link Margin** is not linear with preamp gain due to noise figure influence

---

## 📁 Resources

* 📄 `119_120_121_BIRDS-5 LinkMargin.xlsx`
* 🔗 [Pasternack Noise Temp Calculator](https://www.pasternack.jp/t-calculatornoisefigure)
* 🔗 [Galactic Noise Reference (J-STAGE)](https://www.jstage.jst.go.jp/article/nictkenkyuhoukoku/6/22/6_23/_pdf)
* 🔗 [AQZ102 PhotoMOS Datasheet](https://www.digikey.com/en/products/detail/panasonic-electric-works/AQZ102/)

