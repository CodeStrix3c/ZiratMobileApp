import CustomBarChart from "@/src/components/charts/CustomBarChart";
import PrecipitationMap from "@/src/components/PrecipitationMap";
import * as Icons from "lucide-react-native";
import React, { useMemo, useState } from "react";
import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const getScreenWidth = () => Math.max(320, Dimensions.get("window").width - 32);

const StatChip = ({ Icon, title, value, small }: any) => (
    <View style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingVertical: 12,
        width: "47.5%",
        marginBottom: 12,
        shadowColor: "#c7611f",
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    }}>
        <Text style={{ fontSize: 11, color: "#222222" }}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
            {Icon ? <Icon size={18} color="#c7611f" style={{ marginRight: 8 }} /> : null}
            <Text style={{ fontSize: small ? 14 : 16, fontWeight: "700", color: "#222222" }}>
                {value}
            </Text>
        </View>
    </View>
);

export default function OrchardProfile({ orchards = [], admin = {}, weather = null }: any) {
    const screenWidth = getScreenWidth();

    const sampleOrchards = [
        { id: "1", name: "North Block", area_ha: 2.5, variety: "Gala", plantingYear: 2019, plantDensity: 1200 },
        { id: "2", name: "South Slope", area_ha: 1.8, variety: "Fuji", plantingYear: 2021, plantDensity: 1100 },
        { id: "3", name: "East Field", area_ha: 3.6, variety: "Gala", plantingYear: 2018, plantDensity: 1250 },
    ];

    const dataOrchards = Array.isArray(orchards) && orchards.length ? orchards : sampleOrchards;

    const totals = useMemo(() => {
        let totalAreaHa = 0;
        const varietyMap: Record<string, number> = {};
        const plantingYearMap: Record<string, number> = {};

        for (const o of dataOrchards) {
            const area = Number(o?.area_ha) || 0;
            totalAreaHa += area;
            const variety = o?.variety ? String(o.variety) : "Unknown";
            const year = o?.plantingYear ? String(o.plantingYear) : "Unknown";
            varietyMap[variety] = (varietyMap[variety] || 0) + area;
            plantingYearMap[year] = (plantingYearMap[year] || 0) + area;
        }

        const totalAreaKanals = Number((totalAreaHa * 19.772).toFixed(2));
        return {
            totalAreaHa: Number(totalAreaHa.toFixed(2)),
            totalAreaKanals,
            varietyMap,
            plantingYearMap,
        };
    }, [JSON.stringify(dataOrchards)]);

    const {
        survivalRatePercent = 90,
        avgTreeAgeYears = 4,
        yieldPerTreeKg = 12,
        yieldPerHaKg = 15000,
        pricePerKg = 45,
    } = admin || {};

    const totalTrees = Math.round(dataOrchards.reduce((sum, o) => {
        const density = Number(o?.plantDensity) || 0;
        const area = Number(o?.area_ha) || 0;
        return sum + density * area;
    }, 0));

    const totalYieldKg = Math.round(Number(yieldPerHaKg) * totals.totalAreaHa * (Number(survivalRatePercent) / 100));


    const varietyLabels = Object.keys(totals.varietyMap || {});
    const varietyValues = varietyLabels.map(k => Number((totals.varietyMap[k] || 0).toFixed(2)));

    const plantingLabels = Object.keys(totals.plantingYearMap || {}).sort();
    const plantingValues = plantingLabels.map(k => Number((totals.plantingYearMap[k] || 0).toFixed(2)));

    const alerts = useMemo(() => {
        const out: { level: "info" | "warning" | "critical"; message: string }[] = [];


        if (weather && typeof weather === "object") {
            const maxTemp = Number(weather.maxTempNext7d || 0);
            const rain = Number(weather.rainfallNext7d || 0);
            if (maxTemp >= 40) out.push({ level: "warning", message: "High temperature forecast — consider extra irrigation." });
            if (rain < (totals.totalAreaHa * 5)) out.push({ level: "info", message: "Low rainfall expected — check irrigation schedule." });
        } else {

            if (survivalRatePercent < 80) out.push({ level: "critical", message: "Low survival rate — investigate pests/diseases." });
            if (avgTreeAgeYears <= 2 && totals.totalAreaHa > 1) out.push({ level: "warning", message: "Young orchard blocks — protect from heat/frost." });
        }


        const varietyCount = varietyLabels.length;
        if (varietyCount > 3 && totalTrees > 5000) {
            out.push({ level: "info", message: "Multiple varieties present — staggered spray schedule recommended." });
        }

        return out;
    }, [weather, survivalRatePercent, avgTreeAgeYears, totals, varietyLabels.length, totalTrees]);
    const estimatedRevenue = (totalYieldKg * pricePerKg);
    const irrigationScore = (() => {

        let score = 80;
        if (avgTreeAgeYears <= 2) score += 5;
        if (survivalRatePercent < 85) score -= 20;
        return Math.max(30, Math.min(95, score));
    })();

    const [openYield, setOpenYield] = useState(true);
    const [openSoil, setOpenSoil] = useState(false);
    const [openTasks, setOpenTasks] = useState(true);
    const Tree = Icons.Trees;
    const Calendar = Icons.Calendar;
    const Layers = Icons.Layers;
    const Percent = Icons.Percent;

    return (
        <ScrollView style={{ backgroundColor: "#F8FAFC", flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 28, fontWeight: "800", color: "#0F172A", marginTop: 8 }}>
                Orchard Profile
            </Text>
            <Text style={{ fontSize: 13, color: "#6B7280", marginTop: 4, marginBottom: 12 }}>
                Full analytics & actionable insights
            </Text>

            {alerts.length ? (
                <View style={{
                    backgroundColor: "#c7611f",
                    borderColor: "#c7611f",
                    borderWidth: 1,
                    padding: 12,
                    borderRadius: 12,
                    marginBottom: 12,
                }}>
                    {alerts.slice(0, 3).map((a, i) => (
                        <Text key={i} style={{ color: a.level === "critical" ? "#991B1B" : a.level === "warning" ? "#92400E" : "#92400E", fontSize: 13, marginBottom: 4 }}>
                            {a.level === "critical" ? "⚠️ " : a.level === "warning" ? "⚠ " : "ℹ️ "} {a.message}
                        </Text>
                    ))}
                </View>
            ) : null}
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                <StatChip Icon={Tree} title="Total Area" value={`${totals.totalAreaHa} ha`} />
                <StatChip Icon={Layers} title="Tree Count" value={totalTrees.toLocaleString()} />
                <StatChip Icon={Percent} title="Survival Rate" value={`${survivalRatePercent}%`} />
                <StatChip Icon={Calendar} title="Avg Tree Age" value={`${avgTreeAgeYears} yrs`} />
            </View>
            <TouchableOpacity activeOpacity={0.9} onPress={() => setOpenYield(!openYield)} style={{
                backgroundColor: "#fff",
                borderRadius: 12,
                padding: 14,
                marginTop: 8,
                shadowColor: "#000",
                shadowOpacity: 0.03,
                elevation: 2,
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={{ fontSize: 12, color: "#222222" }}>Estimated Productivity</Text>
                        <Text style={{ fontSize: 20, fontWeight: "800", color: "#2222222", marginTop: 6 }}>{yieldPerTreeKg} kg / tree</Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 13, fontWeight: "700", color: "#222222" }}>{totalYieldKg.toLocaleString()} kg</Text>
                        <Text style={{ fontSize: 11, color: "#222222" }}>Projected Yield</Text>
                    </View>
                </View>

                {openYield ? (
                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 12, color: "#222222" }}>Revenue Estimate</Text>
                        <Text style={{ fontSize: 16, fontWeight: "700", color: "#222222", marginTop: 6 }}>
                            ₹ {estimatedRevenue.toLocaleString()}
                        </Text>
                        <Text style={{ fontSize: 11, color: "#c7611f", marginTop: 8 }}>
                            Assumes ₹{pricePerKg}/kg average market price — adjust in admin settings.
                        </Text>
                    </View>
                ) : null}
            </TouchableOpacity>
            <View style={{
                backgroundColor: "#ffffff",
                borderWidth: 1,
                borderColor: "#222222",
                padding: 12,
                borderRadius: 12,
                marginTop: 12
            }}>
                <Text style={{ fontSize: 12, color: "#c7611f", fontWeight: "700" }}>📈 Smart Insight</Text>
                <Text style={{ color: "#222222", fontSize: 13, marginTop: 6 }}>
                    Tree density and survival suggest potential to increase yield by improving fertigation on 2 younger blocks.
                </Text>
            </View>

            <View style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "#222222", marginBottom: 8 }}>Variety Distribution</Text>
                <CustomBarChart labels={varietyLabels} values={varietyValues} title="Area (ha)" type="bar" />

                <View style={{ height: 12 }} />

                <Text style={{ fontSize: 16, fontWeight: "700", color: "#222222", marginBottom: 8 }}>Planting Year Breakdown</Text>
                <CustomBarChart labels={plantingLabels} values={plantingValues} title="Area planted (ha)" type="line" />

                <View style={{ height: 12 }} />

                <Text style={{ fontSize: 16, fontWeight: "700", color: "#222222", marginBottom: 8 }}>Variety Share (pie)</Text>
                <CustomBarChart labels={varietyLabels} values={varietyValues} title="Variety share" type="pie" />
            </View>

            <TouchableOpacity onPress={() => setOpenSoil(!openSoil)} activeOpacity={0.9} style={{
                backgroundColor: "#fff",
                borderRadius: 12,
                padding: 14,
                marginTop: 18,
                shadowColor: "#000",
                shadowOpacity: 0.03,
                elevation: 2,
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={{ fontSize: 12, color: "#6B7280" }}>Soil & Irrigation</Text>
                        <Text style={{ fontSize: 15, fontWeight: "700", color: "#064E3B", marginTop: 6 }}>Soil Moisture: Adequate</Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 13, fontWeight: "700", color: "#0F172A" }}>Irrigation Score</Text>
                        <Text style={{ fontSize: 16, fontWeight: "800", color: irrigationScore > 75 ? "#065F46" : "#92400E" }}>{irrigationScore}</Text>
                    </View>
                </View>

                {openSoil ? (
                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 12, color: "#6B7280" }}>Irrigation source: Drip + Borewell</Text>
                        <Text style={{ fontSize: 12, color: "#6B7280", marginTop: 8 }}>Soil test (last): Dec 2024 — NPK: Good</Text>
                    </View>
                ) : null}
            </TouchableOpacity>


            <TouchableOpacity onPress={() => setOpenTasks(!openTasks)} activeOpacity={0.9} style={{
                backgroundColor: "#FFF7ED",
                borderRadius: 12,
                padding: 14,
                marginTop: 16,
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={{ fontSize: 13, fontWeight: "700", color: "#92400E" }}>Maintenance & Upcoming Tasks</Text>
                        <Text style={{ fontSize: 12, color: "#92400E", marginTop: 6 }}>Pruning due — 15 days • Fertigation scheduled — tomorrow</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: "#92400E", fontWeight: "700" }}>{openTasks ? "Hide" : "Show"}</Text>
                </View>

                {openTasks ? (
                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 12, color: "#374151" }}>• Spray copper (preventive) — priority medium</Text>
                        <Text style={{ fontSize: 12, color: "#374151", marginTop: 6 }}>• Check drip emitters across East Field</Text>
                    </View>
                ) : null}
            </TouchableOpacity>


            <Text style={{ fontSize: 16, fontWeight: "700", color: "#0F172A", marginTop: 18, marginBottom: 8 }}>Orchard Location</Text>
            <View style={{
                height: 160,
                backgroundColor: "#E5E7EB",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text style={{ color: "#6B7280" }}>
                    <PrecipitationMap />
                </Text>
            </View>

            <View style={{ height: 24 }} />
        </ScrollView>
    );
}
