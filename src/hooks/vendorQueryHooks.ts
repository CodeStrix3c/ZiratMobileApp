// src/hooks/vendorQueryHooks.js

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteVendorFinancial,
  deleteVendorLicense,
  deleteVendorOperations,
  deleteVendorProducts,
  deleteVendorProfile,
  deleteVendorSupport,
  getVendorFinancial,
  getVendorLicense,
  getVendorOperations,
  getVendorProducts,
  getVendorProfile,
  getVendorSupport,
  getVendorVerification,
  saveVendorFinancial,
  saveVendorLicense,
  saveVendorOperations,
  saveVendorProducts,
  saveVendorProfile,
  saveVendorSupport,
  updateVendorFinancial,
  updateVendorLicense,
  updateVendorOperations,
  updateVendorProducts,
  updateVendorProfile,
  updateVendorSupport,
} from "../services/vendorService";

// ----------------------------------------------------
// 🧑‍🌾 VENDOR PROFILE (Business Info)
// ----------------------------------------------------
export const useVendorProfileQuery = (vendorId) =>
  useQuery({
    queryKey: ["vendorProfile", vendorId],
    queryFn: () => getVendorProfile(vendorId),
    enabled: !!vendorId,
  });

export const useVendorProfileMutation = () =>
  useMutation({ mutationFn: saveVendorProfile });

export const useVendorProfileUpdateMutation = () =>
  useMutation({ mutationFn: updateVendorProfile });

export const useVendorProfileDeleteMutation = () =>
  useMutation({ mutationFn: deleteVendorProfile });

// ----------------------------------------------------
// 📜 LICENSE & COMPLIANCE
// ----------------------------------------------------
export const useVendorLicenseQuery = (vendorId) =>
  useQuery({
    queryKey: ["vendorLicense", vendorId],
    queryFn: () => getVendorLicense(vendorId),
    enabled: !!vendorId,
  });

export const useVendorLicenseMutation = () =>
  useMutation({ mutationFn: saveVendorLicense });

export const useVendorLicenseUpdateMutation = () =>
  useMutation({ mutationFn: updateVendorLicense });

export const useVendorLicenseDeleteMutation = () =>
  useMutation({ mutationFn: deleteVendorLicense });

// ----------------------------------------------------
// 🛒 PRODUCT PORTFOLIO
// ----------------------------------------------------
export const useVendorProductsQuery = (vendorId) =>
  useQuery({
    queryKey: ["vendorProducts", vendorId],
    queryFn: () => getVendorProducts(vendorId),
    enabled: !!vendorId,
  });

export const useVendorProductsMutation = () =>
  useMutation({ mutationFn: saveVendorProducts });

export const useVendorProductsUpdateMutation = () =>
  useMutation({ mutationFn: updateVendorProducts });

export const useVendorProductsDeleteMutation = () =>
  useMutation({ mutationFn: deleteVendorProducts });

// ----------------------------------------------------
// ⚙️ OPERATIONAL DETAILS
// ----------------------------------------------------
export const useVendorOperationsQuery = (vendorId) =>
  useQuery({
    queryKey: ["vendorOperations", vendorId],
    queryFn: () => getVendorOperations(vendorId),
    enabled: !!vendorId,
  });

export const useVendorOperationsMutation = () =>
  useMutation({ mutationFn: saveVendorOperations });

export const useVendorOperationsUpdateMutation = () =>
  useMutation({ mutationFn: updateVendorOperations });

export const useVendorOperationsDeleteMutation = () =>
  useMutation({ mutationFn: deleteVendorOperations });

// ----------------------------------------------------
// 💰 FINANCIAL SECTION
// ----------------------------------------------------
export const useVendorFinancialQuery = (vendorId) =>
  useQuery({
    queryKey: ["vendorFinancial", vendorId],
    queryFn: () => getVendorFinancial(vendorId),
    enabled: !!vendorId,
  });

export const useVendorFinancialMutation = () =>
  useMutation({ mutationFn: saveVendorFinancial });

export const useVendorFinancialUpdateMutation = () =>
  useMutation({ mutationFn: updateVendorFinancial });

export const useVendorFinancialDeleteMutation = () =>
  useMutation({ mutationFn: deleteVendorFinancial });

// ----------------------------------------------------
// 🧑‍🌾 SUPPORT & SERVICES
// ----------------------------------------------------
export const useVendorSupportQuery = (vendorId) =>
  useQuery({
    queryKey: ["vendorSupport", vendorId],
    queryFn: () => getVendorSupport(vendorId),
    enabled: !!vendorId,
  });

export const useVendorSupportMutation = () =>
  useMutation({ mutationFn: saveVendorSupport });

export const useVendorSupportUpdateMutation = () =>
  useMutation({ mutationFn: updateVendorSupport });

export const useVendorSupportDeleteMutation = () =>
  useMutation({ mutationFn: deleteVendorSupport });

// ----------------------------------------------------
// 🔍 VERIFICATION – READ ONLY
// ----------------------------------------------------
export const useVendorVerificationQuery = (vendorId) =>
  useQuery({
    queryKey: ["vendorVerification", vendorId],
    queryFn: () => getVendorVerification(vendorId),
    enabled: !!vendorId,
  });
